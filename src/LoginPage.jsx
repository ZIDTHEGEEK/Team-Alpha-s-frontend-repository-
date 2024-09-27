import React from 'react';
import Logo from './views/index/assets/suimail_logo.png'
import TogglePassword from './TogglePassword'
import { faEye,faEyeSlash  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export default function LoginPage(){
    const [PasswordInputType, Icon] = TogglePassword();

    return(
        
        <div>
           <section className='logo-container relative '>
                <div className='logo bg-skyblue md:fixed md:w-1/5 relative h-full '> 
                    <img src={Logo} alt="Logo" className='md:w-2/3 w-1/5  p-5'/>
               </div>   
               <section className=' absolute md:relative right-0 top-0 '>
                    <div className=' md:absolute right-0 p-5'>
                        <p className='text-white text-xs md:text-base md:text-gray-400'>
                            Having trouble?<a href="#" className='md:text-black'> Get help </a>
                        </p>                    
                    </div>
                </section>               
            </section> 

            <section className='login-section relative top-32 md:ml-25p ml-5p '>

                <form action="">
                    <div className='login-content'>
                        <h3 className='text-3xl font-medium'> 
                            Login 
                        </h3>

                        <p className='py-4 font-semibold'> Thank you for getting back to CKYC. </p>
                    </div>

                    <section className='pt-10'>
                        <div className='email-input'>
                            <label className=' block py-3'> Email </label> 
                            <input type="email" placeholder='Enter email address' className='border border-2 border-gray-300 rounded-lg  lg:w-2/5 w-3/5 xxl:w-32 h-14 px-7'/>
                        </div>

                        <div className='password-input relative'>
                            <label className='block py-3'> Password </label> 
                            <input type={PasswordInputType} className='border border-2 border-gray-300 rounded-lg  lg:w-2/5 w-3/5 xxl:w-32 h-14 px-7'/>

                           

                            <small className='block py-2 absolute r'>
                                <a href="#"> Forget Password?</a>
                            </small>
                        </div>
                        
                            <span  className='password-icon absolute block'> {Icon}  </span>

                        <div className='absolute mt-11'>                                     

                            <input type="submit" value="Login" className='inline-block cursor-pointer text-white text-base py-3 px-11 bg-skyblue font-semibold  hover:bg-blue-600 translate-y-0.5 rounded-lg'/>            
                            <a href="" className='text-indigo-400 font-semibold cursor-pointer underline hover:text-indigo-600 ml-14'> Connect wallet </a>
                        </div>


                    </section>

                    
                    <p className=' text-base pt-40 text-gray-400 font-semibold'>
                        Don't have an account? <a href="#" className='text-blue-800'> Create new account </a>
                    </p>
                    
                </form>
            </section>
           

        </div>
    )
}