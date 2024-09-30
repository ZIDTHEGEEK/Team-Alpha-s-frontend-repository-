import { useState } from "react"
import { toast } from "react-hot-toast"
import { isValidEmail } from "../../../utils"
import { Link, useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../../app/hooks/auth"
import { PiEyeClosedLight, PiEyeLight } from "react-icons/pi"
import ConnectWalletModal from "../../../components/modals/ConnectWalletModal"

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  const { mutateAsync: login, isPending } = useLoginMutation()

  const handleFormIsValid = () => {
    if (!isValidEmail(email)) {
      toast.error("Enter a valid email")
      return false
    }

    if (password.length === 0) {
      toast.error("Enter a valid password")
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      if (!handleFormIsValid()) return

      const response = await login({ email, password })

      if (response.status === 200) {
        toast.success("Logged in successfully")
        setTimeout(() => navigate("/dashboard"), 1000)
      }
    } catch (error) {
      console.error(error)
      toast.error(`Error occured: ${error.message}`)
    }
  }

  return (
    <>
      <div className="flex flex-col items-start justify-center w-full h-screen">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold font-dm-sans text-[#0D1D54]">
            Login
          </h1>
          <p className="text-[#404B7C] font-medium">
            Thank you for getting back to CKYC
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-[700px] flex flex-col gap-y-5"
        >
          <div className="w-full xl:w-2/3">
            <label className="block text-[#404B7C]" htmlFor="email">
              Email
            </label>

            <div className="w-full mt-2">
              <input
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

          <div className="relative w-full xl:w-2/3">
            <label className="block text-[#404B7C]" htmlFor="password">
              Password
            </label>

            <div className="relative w-full mt-2">
              <input
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

            <div className="flex justify-end mt-2">
              <Link to={"#"} className="text-sm text-[#404B7C]">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col md:flex-row items-start md:items-center gap-x-14 gap-y-5">
            <button
              type="submit"
              disabled={isPending}
              className="w-full md:w-fit bg-gradient-to-b from-[#21C1FF] to-[#1B7CE6] py-5 px-10 rounded-md shadow duration-300"
            >
              <span className="text-white font-medium">Login</span>
            </button>

            <ConnectWalletModal userIsLoggingIn={isPending} />
          </div>
        </form>

        <p className="mt-5 text-[#9A9A9A]">
          Don&lsquo;t have an account?
          <Link
            to="/auth/create-account"
            className="bg-clip-text text-transparent ml-2"
            style={{
              backgroundImage: "linear-gradient(to bottom, #21C1FF, #1B7CE6)",
            }}
          >
            Create new account
          </Link>
        </p>
      </div>
    </>
  )
}

export default LoginPage
