const VerticalDesktopMenu = () => {
  return (
    <div className="relative h-full bg-[#4BA2FF] hidden xl:flex flex-col items-center justify-start px-2">
      <button type="button" className="rounded-full w-[45px] p-1 mt-7">
        <img
          src="/svg/face-avatar-icon.svg"
          alt="Face avatar"
          className="w-full h-auto"
        />
      </button>

      <div className="flex flex-col items-center justify-start mt-12 gap-4">
        <button type="button" className="hover:scale-95 duration-200">
          <img
            src="/svg/white-token-chat-icon.svg"
            alt="Token Chat"
            className="w-[40px] h-auto"
          />
        </button>

        <button type="button" className="hover:scale-95 duration-200">
          <img
            src="/svg/white-video-chat-icon.svg"
            alt="Video Chat"
            className="w-[40px] h-auto"
          />
        </button>
      </div>
    </div>
  )
}

export default VerticalDesktopMenu
