import { useState } from "react"
import clsx from "clsx"
import { Outlet } from "react-router-dom"
import NavSideBar from "../ui/NavSideBar"
import DashboardTopMenu from "../ui/DashboardTopMenu"
import ComposeEmailForm from "../ui/ComposeEmailForm"
import { useDispatch, useSelector } from "react-redux"
import VerticalDesktopMenu from "../ui/VerticalDesktopMenu"
import { setComposeEmailFormDisplayState } from "../../redux/slices/appUISlice"

const DashboardLayout = () => {
  const dispatch = useDispatch()
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
  const [userSettingsIsOpen, setUserSettingsIsOpen] = useState(false)
  const composeEmailFormDisplayState = useSelector(
    (state) => state.appUIReduce.composeEmailFormDisplayState
  )

  const handleSetComposeEmailFormDisplayState = (value) => {
    dispatch(setComposeEmailFormDisplayState(value))
  }

  return (
    <div className="relative w-full h-screen flex flex-col xl:flex-row bg-[#F7F9FF] overflow-hidden">
      <NavSideBar
        sideBarIsOpen={sideBarIsOpen}
        setSideBarIsOpen={setSideBarIsOpen}
        setComposeEmailFormIsActive={handleSetComposeEmailFormDisplayState}
      />

      <div className="w-full xl:w-[73%] flex-1 flex relative z-10 pl-5">
        <div className="w-full flex flex-col relative pr-5">
          <DashboardTopMenu
            setSideBarIsOpen={setSideBarIsOpen}
            userSettingsIsOpen={userSettingsIsOpen}
            setUserSettingsIsOpen={setUserSettingsIsOpen}
          />

          <div
            className={clsx([
              "flex-1 w-full bg-white rounded-t-3xl pb-14 overflow-hidden",
            ])}
          >
            <Outlet />
          </div>
        </div>

        <VerticalDesktopMenu />
      </div>

      {composeEmailFormDisplayState && <ComposeEmailForm />}
    </div>
  )
}

export default DashboardLayout
