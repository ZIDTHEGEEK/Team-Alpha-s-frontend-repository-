import PropTypes from "prop-types"

const ComposeEmailForm = ({ setComposeEmailFormIsActive }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 z-50">
      <div className="w-full h-full relative">
        <div className="absolute bottom-[10px] right-[70px] w-full max-w-[500px] h-[70vh] bg-white rounded-md shadow-lg">
          <div></div>
        </div>
      </div>
    </div>
  )
}

ComposeEmailForm.propTypes = {
  setComposeEmailFormIsActive: PropTypes.func.isRequired,
}

export default ComposeEmailForm
