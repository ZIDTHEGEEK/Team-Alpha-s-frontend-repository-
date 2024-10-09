import { useState } from "react"
import clsx from "clsx"
import { Outlet } from "react-router-dom"
import NavSideBar from "../ui/NavSideBar"
import DashboardTopMenu from "../ui/DashboardTopMenu"
import VerticalDesktopMenu from "../ui/VerticalDesktopMenu"
import ComposeEmailForm from "../ui/ComposeEmailForm"
import VerticalToggle from "../ui/VerticalToggle"

const DashboardLayout = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
  const [userSettingsIsOpen, setUserSettingsIsOpen] = useState(false)
  const [composeEmailFormIsActive, setComposeEmailFormIsActive] =
    useState(false) 


  return (
    <div className="relative w-full h-screen flex flex-col xl:flex-row bg-[#F7F9FF]">
      <NavSideBar
        sideBarIsOpen={sideBarIsOpen}
        setSideBarIsOpen={setSideBarIsOpen}
        setComposeEmailFormIsActive={setComposeEmailFormIsActive}
      />

      <div className="w-full xl:w-[73%] h-full xl:h-screen flex relative z-10 pl-5">
        <div className="w-full h-full flex flex-col relative pr-5">
          <DashboardTopMenu
            setSideBarIsOpen={setSideBarIsOpen}
            userSettingsIsOpen={userSettingsIsOpen}
            setUserSettingsIsOpen={setUserSettingsIsOpen}
          />

          <div
            className={clsx(["flex-grow w-full h-full bg-white rounded-t-3xl"])}
          >
            <Outlet />
          </div>
        </div>

        <VerticalDesktopMenu />
      </div>

      {composeEmailFormIsActive && (
        <ComposeEmailForm
          setComposeEmailFormIsActive={setComposeEmailFormIsActive}
        />
      )}

      {/* <VerticalToggle /> */}
      
    </div>
  )
}

export default DashboardLayout
