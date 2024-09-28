import React from "react"

const SignUp = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side with Form */}
      <div className="w-3/5 bg-white flex flex-col justify-center items-start p-12">
        <h1 className="text-3xl font-bold mb-4">Create an Account</h1>
        <p className="text-gray-500 text-md mb-8">
          Sign up with us, let's make your information safe.
        </p>

        <form className="w-full">
          {/* Full Name & Username Row */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-md mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 p-2 rounded-lg text-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-md mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter nickname"
                className="w-full border border-gray-300 p-2 rounded-lg text-md"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-md mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-2 rounded-lg text-md"
            />
          </div>

          {/* Phone Number (Optional) */}
          <div className="mb-4">
            <label className="block text-gray-700 text-md mb-1">
              Phone Number (Optional)
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 p-2 rounded-lg text-md"
            />
          </div>

          {/* Submit Button */}
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg w-full text-md font-semibold">
            Save & Continue
          </button>
        </form>

        {/* Already have an account */}
        <p className="mt-6 text-md">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Log in
          </a>
        </p>
      </div>

      {/* Right Side with Full Length Rectangle and Logo */}
      <div className="w-2/5 bg-gray-100 flex justify-center items-center relative">
        {/* Full height rectangle without rounded edges */}
        <div className="bg-blue-500 h-full w-full flex justify-center items-start">
          {/* Logo inside the rectangle positioned at the top */}
          <img
            src="/SuiFig.png"
            alt="SuiMail Logo"
            className="h-30 w-40 object-contain mt-10"
          />
        </div>
      </div>
    </div>
  )
}

export default SignUp
