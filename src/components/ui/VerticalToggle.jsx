import { IoMdPerson } from "react-icons/io";
import { TbLogout } from "react-icons/tb";

const VerticalToggle = () => {
  return (        
    <div className="bg-black/35 absolute top-0 w-full h-full z-[100] flex flex-col items-end ">
      <div className="bg-white w-[10%] flex flex-col py-2 rounded-xl absolute right-[4%] top-[5%]">
        <div className=" flex items-center cursor-pointer text-sm py-3 hover:scale-95 duration-200">
          <IoMdPerson className="w-1/4" />
          <p> Profile </p>
        </div>

        <div className="border border-black/35"></div>

        <div className=" flex items-center cursor-pointer text-sm py-3 hover:scale-95 duration-200">
            <div className="w-1/4">
                 <img src="public\svg\convert-card.svg " alt="convert-card" className="w-[70%] pl-[10px]" />
            </div>
        
          <p> Change Wallet </p>
        </div>

        <div className="border border-black/35"></div>

        <div className=" flex items-center cursor-pointer text-sm py-3 hover:scale-95 duration-200">
          <TbLogout className="w-1/4" />
          <p> Disconnect </p>
        </div>
      </div>
    </div>
  )
}

export default VerticalToggle
