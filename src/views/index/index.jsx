import React from "react"

function HomePage() {
  return (
    <div className="bg-white min-h-screen flex">
      {/* Left Side (Header, Subheading, and Logo) */}
      <div className="flex-grow p-10 flex flex-col justify-center">
        <div className="flex items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Build a secure, private, and community-driven email platform where
              users have full control over data and identity.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              SuiMail is designed to provide end-to-end encryption, token-based
              incentives, and self-sovereign identity, ensuring users are in
              charge of their own information and communications in a
              decentralized environment.
            </p>
          </div>
          <img
            src="mail_logo.jpg"
            alt="SuiMail Logo"
            className="h-20 ml-4 "
            width="100px"
          />
        </div>

        {/* Button Container */}
        <div className="mt-6">
          <a
            href="/create-account"
            className="bg-blue-500  text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Create New Account
          </a>
          <a href="/login" className="ml-4 text-blue-500">
            I Already Have an Account
          </a>
        </div>
      </div>

      {/* Right Side Rectangle with SuiMail text*/}
      <div className="flex-none w-1/4 bg-gray-100 flex flex-col justify-center">
        <div className="bg-blue-500 h-3/4 w-3/4 mx-auto rounded-lg flex items-center justify-center mt-auto">
          <h1 className="text-white text-3xl font-bold">SuiMail</h1>
        </div>
      </div>
    </div>
  )
}

export default HomePage
