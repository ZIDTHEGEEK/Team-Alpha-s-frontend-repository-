import { useState } from "react";
import { FaPlus,FaStar,FaClock,FaTrash,FaBars,FaVideo } from "react-icons/fa6";
import { MdSend,MdInsertDriveFile,MdLabel,MdInbox,MdSearch,MdClose } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RiSpamFill } from "react-icons/ri";
import Logo from "../index/assets/logo.png"
import Elite from "../index/assets/elite.png"
import SideLogo from "../index/assets/sidelogo.png"
import IconDuplicate from "./IconDuplicate";

const EmailDashboard = () => {

    const [ status, useStatus ] = useState(false)
    const [rightstatus, useRightstatus] = useState(false)
    return(
        <div className="bg-blue-100 h-svh">
            <section className="">
                {/* SideBar Section  */}
                <section className="sidebar hidden lg:block fixed bg-white h-svh w-1/5 ">
                    <div className="logo py-4 px-8">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <section className="sidebar-menu ">
                    
                        <a className="inline-block p-3 mx-4  rounded-full lg:w-3/5 w-3/5 xl:w-2/4  drop-shadow-md  bg-white rounded" href="">
                        <div className="flex items-center justify-center w-full ">
                            <i className="text-[2rem] text-skyblue "> <FaPlus /> </i> <p className="px-2 "> Compose</p>
                        </div>
                        </a>


                        <div className=" pl-8">                          

                            <IconDuplicate icons={<MdInbox />} text=" Inbox"  />
                                            
                            <IconDuplicate icons={<FaStar />} text="Starred"  />
                                    
                            <IconDuplicate icons={<FaClock />} text="Snoozed" num="3"  />

                            <IconDuplicate icons={<MdSend  />} text=" Sent" />
                        
                            <IconDuplicate icons={<MdInsertDriveFile />} text="  Drafts" />
                                                
                            <IconDuplicate icons={<RiSpamFill />} text="Spam" />
                                                  
                            <IconDuplicate icons={<FaTrash  />} text="Trash" />
                                                
                            <IconDuplicate icons={ <MdLabel  />} text="Categories" />
                        </div>
                    
                        
                        
                    </section>
                    

                </section>  

              
                    {/* sidebar at mobile */}
                {
                    status?
                    <div className=" bg-black/70 w-full z-10 h-screen absolute top-0">
                        <section className="sidebar relative top-[10%] bg-white h-4/5  w-2/4  rounded-e-2xl ">

                            {/* close Toggle */}
                            <div className=" absolute right-[7%] top-[5%] cursor-pointer bg-skyblue text-white p-1 text-xl rounded-2xl " 
                            onClick={()=> useStatus(false)}
                            >
                                <MdClose />   
                            </div>

                            <div className="logo pt-11 pb-7 px-8">
                                <img src={SideLogo} alt="Logo" />
                            </div>
                            <section className="sidebar-menu ">
                            
                                <a className="inline-block p-3 mx-4  rounded-full  w-3/5 sm:w-2/5 drop-shadow-md  bg-white rounded" href="">
                                    <div className="flex items-center justify-center w-full ">
                                        <i className="text-[2rem] text-skyblue "> <FaPlus /> </i> <p className="px-2 "> Compose</p>
                                    </div>
                                 </a>


                                <div className=" pl-8">                          

                                    <IconDuplicate icons={<MdInbox />} text=" Inbox"  />
                                                    
                                    <IconDuplicate icons={<FaStar />} text="Starred"  />
                                            
                                    <IconDuplicate icons={<FaClock />} text="Snoozed" num="3"  />

                                    <IconDuplicate icons={<MdSend  />} text=" Sent" />
                                
                                    <IconDuplicate icons={<MdInsertDriveFile />} text="  Drafts" />
                                                        
                                    <IconDuplicate icons={<RiSpamFill />} text="Spam" />
                                                        
                                    <IconDuplicate icons={<FaTrash  />} text="Trash" />
                                                        
                                    <IconDuplicate icons={ <MdLabel  />} text="Categories" />
                                </div>

                            
                            </section>
                    

                        </section>  
                    </div>:
                    null
                }



                {/* middle section */}
                <section className="w-full lg:w-9/12  lg:ml-[20%]" >
                    <section className="flex items-center justify-around lg:flex-none">
                           {/* SideBar Togglo */}
                           <div className=" lg:hidden text-3xl text-skyblue cursor-pointer " 
                        onClick={()=>useStatus(true)}>
                            
                            <FaBars /> 
                        </div>
                        

                        <div className="ml-4 relative pt-4 w-2/4 lg:w-full">
                            <i className="absolute top-[45%]  left-[1%] lg: left-[0.5x%] text-2xl text-gray-600 "> <MdSearch /> </i>
                            <input 
                            type="search"
                            placeholder="Search mail"
                            className="bg-gray-200 w-2/6 text-base pl-9 p-[10px] rounded-lg w-4/5 lg:w-[35%]"
                            />

                        </div>

                        {/* Right Bar Icon */}
                        <section>
                            <div className=" lg:hidden h-[15%] py-1 bg-skyblue p-[2px] rounded-full cursor-pointer" 
                             onClick={()=> useRightstatus(true)}
                            >
                                <img src={Elite} alt="Avatar" />
                            </div>
                        </section> 
                    </section>

                   
                        
                    <p className="border border-gray-500  border-1 mt-3 hidden lg:block "></p> 

                    {/* for mail content */}
                    <section>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro minima distinctio eius assumenda modi libero quae aperiam iste voluptatibus! Quisquam fuga perspiciatis iure molestias doloribus incidunt, amet vero quia?
                            Asperiores illum aliquid voluptatum voluptatibus commodi ipsum dolor iste in quasi ut obcaecati ab sapiente totam quod, ipsam omnis quaerat corrupti reprehenderit at provident. Exercitationem vitae similique repudiandae alias quaerat?
                            Ipsa, expedita, placeat deleniti rem dolorum tempore at qui minima recusandae soluta vitae? Ratione, consequatur iusto, in laborum repudiandae tempore ex reprehenderit vel dolores tempora quia fuga. Atque, nulla est.
                            Nostrum, excepturi? Maxime adipisci illum accusamus corporis expedita voluptates deserunt incidunt sunt, dolores eaque voluptatem sed fugiat rem magnam delectus mollitia impedit dolor? Nesciunt quo inventore mollitia quos recusandae? Aliquid!
                            Delectus vel deserunt fugiat, rem nesciunt eos labore doloremque consequatur odit rerum modi, repudiandae autem tenetur possimus facere doloribus! Similique, corporis velit! Perferendis deleniti delectus ea amet, adipisci quam rem!
                            Dolore quam hic deserunt eos atque nihil libero ipsam, cumque amet ipsa! Recusandae voluptate esse fugiat labore non, amet eos porro harum obcaecati consequuntur hic molestias. Nesciunt rerum necessitatibus aliquam.
                            Quo voluptates, earum sapiente dolor repudiandae veniam nemo? Amet voluptatibus incidunt expedita neque tempore. Non quam id error deleniti officiis praesentium iure quo voluptate eum quisquam architecto, pariatur consequatur voluptatem!
                        </div>
                    </section>

                </section>
                
                {/* Right Bar */}                

                    <section className="bg-skyblue w-[5%] h-svh absolute top-0 right-0 flex-col items-center rounded-s-xl  hidden lg:flex ">
                        <div className=" h-[15%] py-5">
                            <img src={Elite} alt="Avatar" />
                        </div>
                        <div className="text-white text-3xl h-[8%]">
                            <a href="#">
                                < IoChatbubblesOutline />
                            </a>
                        </div>
                        <div className="text-white text-3xl">
                            <a href="#">

                                <FaVideo /> 
                            </a>
                        </div>
                    </section>  

                       {
                        rightstatus?
                        <div className=" bg-black/70 w-full z-10 h-screen absolute top-0" >

                            <section className="bg-skyblue relative flex flex-col pt-[4%] pl-[1%] rounded-s-xl top-[30%] left-[90%] h-1/5  w-[10%]  ">                 

                                {/* close Toggle */}
                                <div className=" absolute cursor-pointer top-[2%] right-[2%] bg-white text-skyblue p-1 text-xl rounded-2xl " 
                                onClick={()=> useRightstatus(false)}
                                >
                                    <MdClose />   
                                </div>

                                <div className="text-white text-3xl h-[40%]">
                                    <a href="#">
                                        < IoChatbubblesOutline />
                                    </a>
                                </div>
                                <div className="text-white text-3xl">
                                    <a href="#">

                                        <FaVideo /> 
                                    </a>
                                </div>
                            </section> 

                        </div>:
                        null
                       }                        

            </section>
                 
        </div>
    )
}


export default EmailDashboard
