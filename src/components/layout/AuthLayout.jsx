import { Link, Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="relative w-full h-screen flex flex-col xl:flex-row xl:overflow-hidden">
      <div className="xl:relative w-full xl:w-[30%] xl:max-h-none xl:h-full bg-gradient-to-b from-[#21C1FF] to-[#1B7CE6] py-10 pl-10 xl:pl-20">
        <Link to={"/"}>
          <img
            src="/png/SuiFig.png"
            alt="SuiMail Logo"
            className="w-32 xl:w-40"
          />
        </Link>
      </div>

      <div className="w-full xl:w-[70%] px-8 md:px-16 lg:px-20">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
