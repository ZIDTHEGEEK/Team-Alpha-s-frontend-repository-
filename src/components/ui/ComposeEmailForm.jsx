import PropTypes from "prop-types"
import { useState } from "react"
import { MdClose } from "react-icons/md"

const ComposeEmailForm = ({ setComposeEmailFormIsActive }) => {
  const [emailPayload, setEmailPayload] = useState({
    recipient: "",
    subject: "",
    body: "",
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setEmailPayload((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 z-50">
      <div className="w-full h-full relative">
        <div className="absolute bottom-[10px] left-1/2 md:left-[calc(100%-515px)] -translate-x-1/2 md:translate-x-0 w-full max-w-[95%] sm:max-w-[500px] h-[70vh] bg-white rounded-md shadow-lg flex flex-col pb-5">
          <div className="flex items-center justify-end py-5 pr-5">
            <button
              type="button"
              onClick={() => setComposeEmailFormIsActive(false)}
            >
              <MdClose size={22} />
            </button>
          </div>
          <form
            className="w-full h-full flex flex-col justify-between px-3"
            onSubmit={handleSubmit}
          >
            <div className="h-fit flex flex-col">
              <div className="w-full">
                <input
                  type="text"
                  name="recipient"
                  id="recipient"
                  value={emailPayload.recipient}
                  onChange={handleOnChange}
                  placeholder="To"
                  className="w-full border-b border-[#7171718A] outline-none py-2 px-2"
                />
              </div>

              {/*  */}
              <div className="w-full">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={emailPayload.subject}
                  onChange={handleOnChange}
                  placeholder="Subject"
                  className="w-full border-b border-[#7171718A] outline-none py-2 px-2"
                />
              </div>

              {/*  */}
              <div className="w-full">
                <textarea
                  name="body"
                  id="body"
                  placeholder="Body text"
                  value={emailPayload.body}
                  onChange={handleOnChange}
                  className="w-full border-none outline-none py-2 px-2"
                ></textarea>
              </div>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="bg-[#21C1FF] px-6 py-2 rounded-md"
              >
                <span className="text-white">Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

ComposeEmailForm.propTypes = {
  setComposeEmailFormIsActive: PropTypes.func.isRequired,
}

export default ComposeEmailForm
