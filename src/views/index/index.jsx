import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col-reverse xl:flex-row items-center xl:overflow-hidden py-10 xl:p-0">
      {/* Left Side (Header, Subheading, and Logo) */}
      <div className="h-full w-full xl:w-1/2 flex flex-col items-center justify-center px-8 lg:px-16 xl:px-20">
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
          <div className="w-full flex flex-col xl:flex-row items-center justify-start gap-6">
            <Link
              to="/auth/create-account"
              className="bg-[#4BA2FF] py-2 px-4 rounded-md hover:shadow-md duration-300 w-full xl:w-fit text-center"
            >
              <span className="text-white font-medium">Create New Account</span>
            </Link>
            <Link
              to="/auth/login"
              className="group hover:bg-[#4BA2FF] duration-300 py-2 px-4 rounded-md hover:shadow-md w-full xl:w-fit text-center"
            >
              <span className="text-[#4BA2FF] group-hover:no-underline group-hover:text-white duration-300">
                I already have an account
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-1/2 flex items-center justify-center py-10 xl:p-0">
        <img
          src="/png/suimail-index-logo.png"
          alt="SuiMail Logo"
          className="max-w-[200px] sm:max-w-[300px] xl:max-w-[500px] w-full ml-4"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default HomePage
