import PropTypes from "prop-types"

const ComingSoonPage = ({ page = "This page" }) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="bg-[#4BA2FF] py-2 px-6 rounded-md">
        <p className="text-lg text-white">{page} is coming Soon</p>
      </div>
    </div>
  )
}

ComingSoonPage.propTypes = { page: PropTypes.string }

export default ComingSoonPage
