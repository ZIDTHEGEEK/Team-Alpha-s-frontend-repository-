import PropTypes from "prop-types"
import { IoIosSearch } from "react-icons/io"

const DashboardTopMenu = ({
  setSideBarIsOpen,
  userSettingsIsOpen,
  setUserSettingsIsOpen,
}) => {
  return (
    <div className="relative w-full h-[12vh] flex items-center justify-between sm:justify-evenly px-3 sm:px-0 py-10 gap-4 sm:gap-6 xl:gap-10">
      <button
        type="button"
        onClick={() => setSideBarIsOpen(true)}
        className="xl:hidden"
      >
        <img
          src="/svg/open-menu-btn-icon.svg"
          alt="Open Menu"
          className="w-[50px] md:w-[40px] h-auto relative"
        />
      </button>

      <div className="relative max-w-[500px] w-full bg-[#F1F3F4] flex items-center py-2.5 px-9 rounded-md shadow-sm">
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 left-2"
        >
          <IoIosSearch color="#0000008A" size={23} />
        </button>

        <input
          type="text"
          name="search-all"
          id="search-all"
          placeholder="Search mail"
          className="flex-1 w-full h-full outline-none border-none bg-transparent text-xs sm:text-sm"
        />
      </div>

      <div className="relative xl:hidden">
        <button
          type="button"
          onClick={() => setUserSettingsIsOpen(!userSettingsIsOpen)}
          className="rounded-full w-[40px] sm:w-[45px] border border-[#4BA2FF] p-1"
        >
          <img
            src="/svg/face-avatar-icon.svg"
            alt="Face avatar"
            className="w-full h-auto"
          />
        </button>

        {userSettingsIsOpen && (
          <div className="absolute top-[120%] right-0 w-[300px] py-20 bg-white shadow-sm"></div>
        )}
      </div>
    </div>
  )
}

DashboardTopMenu.propTypes = {
  setSideBarIsOpen: PropTypes.func.isRequired,
  userSettingsIsOpen: PropTypes.bool.isRequired,
  setUserSettingsIsOpen: PropTypes.func.isRequired,
}

export default DashboardTopMenu
