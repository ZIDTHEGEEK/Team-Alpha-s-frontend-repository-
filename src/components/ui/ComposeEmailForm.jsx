import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { MailService } from "../../services/mail.service";
import { useGetUserWalletByEmailMutation } from "../../redux/hooks/user";
import { setComposeEmailFormDisplayState } from "../../redux/slices/appUISlice";
// import { CipherService } from "../../utils/encryption";

const ComposeEmailForm = () => {
  const dispatch = useDispatch();
  const mailService = new MailService();
  // const cipherService = new CipherService();
  const [emailIsSending, setEmailIsSending] = useState(false);

  const [emailPayload, setEmailPayload] = useState({
    recipient: "",
    subject: "",
    body: "",
  });

  const { mutateAsync: getUserWallet } = useGetUserWalletByEmailMutation();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setEmailPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const emailInputIsValid = () => {
    if (emailPayload.recipient.length === 0) {
      toast.error("Enter a valid email or wallet address");
      return false;
    }
    if (emailPayload.subject.length === 0) {
      toast.error("Enter a valid email subject");
      return false;
    }
    if (emailPayload.body.length === 0) {
      toast.error("Enter a valid email message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!emailInputIsValid()) return;

      setEmailIsSending(true);

      const response = await getUserWallet({ email: emailPayload.recipient });

      if (response.status === 201 && response.data) {
        const walletAddress = response.data;
        const stringifiedMail = JSON.stringify(emailPayload);
        // const { encryptedData, secure } = 
        //   await cipherService.encryptData(stringifiedMail);

        const transactionResponse = await mailService.sendMail({
          // body: encryptedData.toHex(),
          body: stringifiedMail, // Temporarily using plain text
          recipient: walletAddress,
          // aesKey: secure.aesKey,
          // iv: secure.iv,
        });

        if (transactionResponse.effects.status.status === "success") {
          toast.success("Email sent successfully");
          handleSetFormDisplayState(false);
        }
      }
    } catch (error) {
      if (error?.response?.data?.message.toLowerCase() === "not found") {
        toast.error(
          `Cannot send mail to ${emailPayload.recipient}. Try again later`
        );
        return;
      }
      toast.error(`${error.message}`);
    } finally {
      setEmailIsSending(false);
    }
  };

  const handleSetFormDisplayState = (value) => {
    dispatch(setComposeEmailFormDisplayState(value));
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 z-50">
      <div className="w-full h-full relative">
        <div className="absolute bottom-[10px] left-1/2 md:left-[calc(100%-515px)] -translate-x-1/2 md:translate-x-0 w-full max-w-[95%] sm:max-w-[500px] h-[70vh] bg-white rounded-md shadow-lg flex flex-col pb-5">
          <div className="flex items-center justify-end py-5 pr-5">
            <button
              type="button"
              onClick={() => handleSetFormDisplayState(false)}
            >
              <img
                src="/svg/email-compose-close.svg"
                alt="Compose form close"
                className="w-[23px]"
              />
            </button>
          </div>
          <form
            className="w-full h-full flex flex-col justify-between px-3"
            onSubmit={handleSubmit}
          >
            <div className="h-fit flex flex-col">
              <div className="w-full">
                <input
                  required
                  type="email"
                  name="recipient"
                  id="recipient"
                  value={emailPayload.recipient}
                  onChange={handleOnChange}
                  placeholder="To"
                  className="w-full border-b border-[#7171718A] outline-none py-2 px-2"
                />
              </div>

              <div className="w-full">
                <input
                  required
                  type="text"
                  name="subject"
                  id="subject"
                  value={emailPayload.subject}
                  onChange={handleOnChange}
                  placeholder="Subject"
                  className="w-full border-b border-[#7171718A] outline-none py-2 px-2"
                />
              </div>

              <div className="w-full">
                <textarea
                  required
                  name="body"
                  id="body"
                  placeholder="Body text"
                  value={emailPayload.body}
                  onChange={handleOnChange}
                  className="w-full border-none outline-none py-2 px-2 min-h-[37vh]"
                ></textarea>
              </div>
            </div>

            <div className="w-full">
              <button
                type="submit"
                disabled={emailIsSending}
                className="bg-[#21C1FF] px-6 py-2 rounded-md"
              >
                <span className="text-white">
                  {emailIsSending ? "Sending" : "Send"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComposeEmailForm;
