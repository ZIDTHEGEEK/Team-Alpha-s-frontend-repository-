const HomePage = () => {
  return (
    <div className="bg-white h-screen w-full flex flex-col-reverse xl:flex-row items-center overflow-hidden">
      {/* Left Side (Header, Subheading, and Logo) */}
      <div className="h-full w-1/2 flex flex-col items-center justify-center px-20">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-4xl font-bold text-gray-800 uppercase font-dm-sans text-justify">
            Build a secure, private, and community-driven email platform where
            users have full control over data and identity.
          </h1>
          <p className="text-lg text-gray-600 text-justify">
            SuiMail is designed to provide end-to-end encryption, token-based
            incentives, and self-sovereign identity, ensuring users are in
            charge of their own information and communications in a
            decentralized environment.
          </p>

          {/* Button Container */}
          <div className="w-full flex items-center justify-start gap-6">
            <a
              href="/create-account"
              className="bg-[#4BA2FF] py-2 px-4 rounded-md hover:shadow-md duration-300"
            >
              <span className="text-white font-medium">Create New Account</span>
            </a>
            <a
              href="/login"
              className="group hover:bg-[#4BA2FF] duration-300 py-2 px-4 rounded-md hover:shadow-md"
            >
              <span className="text-[#4BA2FF] group-hover:no-underline group-hover:text-white duration-300">
                I already have an account
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <img
          src="/suimail-index-logo.png"
          alt="SuiMail Logo"
          className="max-w-[500px] w-full ml-4"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default HomePage
