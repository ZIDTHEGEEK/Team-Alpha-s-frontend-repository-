import { useState } from "react"
import { toast } from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { cleanText, isValidEmail } from "../../../utils"
import { AuthService } from "../../../services/auth.service"
import { PiEyeClosedLight, PiEyeLight } from "react-icons/pi"
import { useCreateAccountMutation } from "../../../app/hooks/auth"

const CreateAccountPage = () => {
  const navigate = useNavigate()
  const authService = new AuthService()
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  const { mutateAsync: createAccount } = useCreateAccountMutation()

  const handleFormIsValid = () => {
    if (fullName.length === 0) {
      toast.error("Enter a valid full name")
      return false
    }

    if (username.length === 0) {
      toast.error("Enter a valid user name")
      return false
    }

    if (!isValidEmail(email)) {
      toast.error("Enter a valid email")
      return false
    }

    if (password.length < 6) {
      toast.error("Enter a valid password. Min length is 6 characters")
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      if (!handleFormIsValid()) return

      const walletAddressAndKeypair = authService.generateNonce()

      const createAccountData = {
        ...walletAddressAndKeypair,
        password,
        phone: cleanText(phone),
        email: cleanText(email),
        fullname: cleanText(fullName),
        username: cleanText(username),
      }

      const response = await createAccount(createAccountData)

      if (response.status === 201) {
        toast.success("Account created successfully")
        setTimeout(() => navigate("/auth/login"), 1000)
      }
    } catch (error) {
      console.log(error)
      if (
        error.response.data.message &&
        error.response.data.message.toLowerCase() ===
          "you already have an account"
      ) {
        toast.error("You already have an account. Please login")
        return
      }
      toast.error(`Error occured: ${error.message}`)
    }
  }

  return (
    <div className="flex flex-col items-start justify-center w-full h-screen">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold font-dm-sans text-[#0D1D54]">
          Create an Account
        </h1>
        <p className="text-[#404B7C] font-medium">
          Sign up with us, let&lsquo;s make your information safe.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-[700px] flex flex-col gap-y-5"
      >
        {/* Full Name & Username Row */}
        <div className="w-full flex flex-col xl:flex-row gap-x-4 gap-y-5">
          <div className="w-full xl:w-1/2 flex flex-col">
            <label className="block text-[#404B7C]" id="fullname">
              Full Name
            </label>

            <div className="w-full mt-2">
              <input
                required
                type="text"
                id="fullname"
                name="fullname"
                value={fullName}
                placeholder="Enter your full name"
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5]"
              />
            </div>
          </div>

          <div className="w-full xl:w-1/2 flex flex-col">
            <label className="block text-[#404B7C]" htmlFor="username">
              Username
            </label>

            <div className="w-full mt-2">
              <input
                required
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder="Enter nickname"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5]"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="w-full xl:w-2/3">
          <label className="block text-[#404B7C]" htmlFor="email">
            Email
          </label>

          <div className="w-full mt-2">
            <input
              required
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5]"
            />
          </div>
        </div>

        {/* Phone Number (Optional) */}
        <div className="w-full xl:w-2/3">
          <label className="block text-[#404B7C]" htmlFor="phone">
            Phone <span className="text-[#C6C6C6] text-sm">(Optional)</span>
          </label>

          <div className="w-full mt-2">
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5]"
            />
          </div>
        </div>

        {/* Password */}
        <div className="w-full xl:w-2/3">
          <label className="block text-[#404B7C]" htmlFor="password">
            Password
          </label>

          <div className="relative w-full mt-2">
            <input
              required
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              type={passwordIsVisible ? "text" : "password"}
              className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5] z-0"
            />
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-7 z-10"
              onClick={() => setPasswordIsVisible(!passwordIsVisible)}
            >
              {passwordIsVisible ? (
                <PiEyeLight className="text-zinc-600" size={22} />
              ) : (
                <PiEyeClosedLight className="text-zinc-600" size={22} />
              )}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="w-full md:w-fit bg-gradient-to-b from-[#21C1FF] to-[#1B7CE6] py-5 px-14 rounded-md shadow duration-300"
          >
            <span className="text-white font-medium uppercase">
              Save & Continue
            </span>
          </button>
        </div>
      </form>

      {/* Already have an account */}
      <p className="mt-5 text-[#9A9A9A]">
        Already have an account?
        <Link
          to="/auth/login"
          className="bg-clip-text text-transparent ml-2"
          style={{
            backgroundImage: "linear-gradient(to bottom, #21C1FF, #1B7CE6)",
          }}
        >
          Log in
        </Link>
      </p>
    </div>
  )
}

export default CreateAccountPage
