import { Link } from "react-router-dom"

const SignUpPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
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
            <label className="block text-[#404B7C]">Full Name</label>

            <div className="w-full mt-2">
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5]"
              />
            </div>
          </div>

          <div className="w-full xl:w-1/2 flex flex-col">
            <label className="block text-[#404B7C]">Username</label>

            <div className="w-full mt-2">
              <input
                type="text"
                placeholder="Enter nickname"
                className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5]"
              />
            </div>
          </div>
        </div>

        {/* Email */}
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

        {/* Phone Number (Optional) */}
        <div className="w-full xl:w-2/3">
          <label className="block text-[#404B7C]">
            Phone <span className="text-[#C6C6C6] text-sm">(Optional)</span>
          </label>

          <div className="w-full mt-2">
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5]"
            />
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

export default SignUpPage