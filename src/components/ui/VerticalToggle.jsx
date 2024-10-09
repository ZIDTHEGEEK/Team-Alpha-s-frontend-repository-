import { MdDrafts } from "react-icons/md"
import { IoMdTrash } from "react-icons/io"
import { RiSpam2Fill } from "react-icons/ri"

const VerticalToggle = ()=>{
    return(
        <div className="bg-black/35 absolute top-0 w-full h-full z-[100] flex flex-col items-end ">
            <div className="bg-white w-[10%] flex flex-col py-2 rounded-xl">
                <div className=" flex items-center text-sm py-1">
                    <MdDrafts />
                    <p> Profile </p>
                </div>

                <div className="border border-black/35"></div>

                <div className=" flex items-center text-sm py-1">
                    <IoMdTrash />
                   <p> Change Wallet </p>
                </div>

                <div className="border border-black/35"></div>
                
                <div className=" flex items-center text-sm py-1">
                    <RiSpam2Fill />
                    <p> Disconnect </p>
                </div>

            </div>

        </div>
    )
}

export default VerticalToggle