import PropTypes from "prop-types"
import { FaPlus } from "react-icons/fa6"
import { MdDrafts } from "react-icons/md"
import { IoMdTrash } from "react-icons/io"
import { RiSpam2Fill } from "react-icons/ri"
import { GoClockFill } from "react-icons/go"
import { RiSendPlaneFill } from "react-icons/ri"
import { useLocation, useNavigate } from "react-router-dom"
import { MdInbox, MdOutlineStarPurple500 } from "react-icons/md"
import clsx from "clsx"
import { Link } from "react-router-dom"

const routes = [
  { icon: MdInbox, label: "Inbox", route: "" },
  {
    icon: MdOutlineStarPurple500,
    label: "Starred",
    route: "/starred",
  },
  {
    icon: GoClockFill,
    label: "Snoozed",
    route: "/snoozed",
  },
  {
    icon: RiSendPlaneFill,
    label: "Sent",
    route: "/sent",
  },
  {
    icon: MdDrafts,
    label: "Drafts",
    route: "/drafts",
  },
  {
    icon: RiSpam2Fill,
    label: "Spam",
    route: "/spam",
  },
  {
    icon: IoMdTrash,
    label: "Trash",
    route: "/trash",
  },

]

const NavSideBar = ({
  sideBarIsOpen,
  setSideBarIsOpen,
  setComposeEmailFormIsActive,
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isActiveRoute = (route) => `/app${route}` === location.pathname

  const handleChangeRoute = (route) => {
    navigate(`/app${route}`)
    setSideBarIsOpen(false)
  }

  return (
    <div
      className={clsx([
        "absolute top-1/2 -translate-y-1/2 w-[280px] h-fit pt-10 pb-20 rounded-r-lg xl:rounded-none xl:relative xl:w-[27%] xl:h-full xl:py-10 flex flex-col gap-7 bg-white shadow-md duration-500 z-30",
        {
          "left-0": sideBarIsOpen,
          "-left-[280px] xl:left-0": !sideBarIsOpen,
        },
      ])}
    >
      <div className="w-full px-6 sm:px-10 flex items-center justify-start gap-10">
        <Link to={"/"}>
          <img
            src="/png/suimail-sidebar-logo.png"
            alt="SuiMail"
            className="w-[200px]"
          />
        </Link>

        <button
          type="button"
          onClick={() => setSideBarIsOpen(false)}
          className="xl:hidden"
        >
          <img
            src="/svg/close-btn-icon.svg"
            alt="Close"
            className="w-[35px] h-auto"
          />
        </button>
      </div>

      <div className="w-full px-6 sm:px-10">
        <button
          type="button"
          onClick={() => setComposeEmailFormIsActive(true)}
          className="flex items-center justify-center gap-3 py-3 px-6 rounded-full shadow hover:shadow-lg border border-[#76767636] hover:scale-105 duration-300"
        >
          <FaPlus size={25} className="text-[#4BA2FF]" />
          <span className="text-lg">Compose</span>
        </button>
      </div>
      {}
      <div className="flex-1 h-full flex flex-col gap-3 mt-5">
        {routes.map((route) => (
          <div
            key={route.route}
            onClick={() => handleChangeRoute(route.route)}
            className={clsx([
              "py-3 pl-6 sm:pl-10 w-fit min-w-[85%] rounded-r-full duration-300 flex gap-3 cursor-pointer",
              {
                "bg-[#F7F9FF]": isActiveRoute(route.route),
                "hover:bg-[#F7F9FF]": !isActiveRoute(route.route),
              },
            ])}
          >
            {
              <route.icon
                size={20}
                color={isActiveRoute(route.route) ? "#4BA2FF" : "#0000008A"}
              />
            }
            <span
              className={clsx(["text-sm"], {
                "font-medium text-[#4BA2FF]": isActiveRoute(route.route),
              })}
            >
              {route.label}
            </span>
          </div>
        ))}

      </div>
    </div>
    
  )
}

NavSideBar.propTypes = {
  sideBarIsOpen: PropTypes.bool.isRequired,
  setSideBarIsOpen: PropTypes.func.isRequired,
  setComposeEmailFormIsActive: PropTypes.func.isRequired,
}

export default NavSideBar
