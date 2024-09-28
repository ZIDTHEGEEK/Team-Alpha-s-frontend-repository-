import { useState } from "react"
import { Link } from "react-router-dom"
import { PiEyeClosedLight, PiEyeLight } from "react-icons/pi"

const LoginPage = () => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
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
          <label className="block text-[#404B7C]">Email</label>

          <div className="w-full mt-2">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5]"
            />
          </div>
        </div>

        <div className="w-full xl:w-2/3">
          <label className="block text-[#404B7C]"> Password</label>

          <div className="relative w-full mt-2">
            <input
              type={passwordIsVisible ? "text" : "password"}
              placeholder="Enter password"
              className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5] z-10"
            />
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-7 z-20"
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

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-x-14 gap-y-5">
          <button
            type="submit"
            className="w-full md:w-fit bg-gradient-to-b from-[#21C1FF] to-[#1B7CE6] py-5 px-10 rounded-md shadow duration-300"
          >
            <span className="text-white font-medium">Login</span>
          </button>

          <button
            type="button"
            className="w-full md:w-fit group relative py-5 px-10 rounded-md overflow-hidden transition-all duration-300 hover:shadow focus:outline-none"
          >
            <span className="relative underline group-hover:no-underline transition-colors duration-500 bg-gradient-to-b from-[#21C1FF] to-[#1B7CE6] bg-clip-text text-transparent group-hover:text-white font-medium z-10">
              Connect wallet
            </span>

            <span className="absolute inset-0 bg-gradient-to-b from-[#21C1FF] to-[#1B7CE6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </button>
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
  )
}

export default LoginPage
