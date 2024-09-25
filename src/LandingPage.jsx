import sui from './views/index/assets/sui.png'


export default function LandingPage(){
    return(
    <div >
        <div>
            <div className='lg:flex flex-row-reverse flex-wrap  justify-center items-center  h-svh'>
                <section className="image px-5 py-5 mx-auto lg:mx-0">
                    <img src={sui} alt="sui-image" />          
                </section>
                <section className=" content-section flex flex-col text-justify xl:w-2/5 px-5 ">

                    <h2 className='font-sans md:text-3xl text-xl leading-relaxed font-bold  space-x-3'>
                    BUILD A SECURE, PRIVATE, AND COMMUNITY-DRIVEN EMAIL PLATFORM WHERE USERS HAVE FULL CONTROL OVER THEIR DATA AND IDENTITY.
                    </h2> 
                    <p className=' py-5'>
                    A Web3-based email platform uses blockchain technology to make digital communication more secure, private, and user-controlled. By storing data in a decentralized way, it ensures that only the intended recipients can access emails, reducing the risk of hacks and surveillance. Users manage their digital identities with decentralized identifiers (DIDs), allowing for secure logins without passwords. The platform's development and policies are guided by the community through decentralized autonomous organizations (DAOs), ensuring it meets users' needs and values.
                    </p>         
                    <div className=' mt-4'>              
                    <a href="" className='inline-block cursor-pointer text-white bg-skyblue py-2 px-3 hover:bg-blue-600 translate-y-0.5 rounded-lg'> Create new account </a>              
                    <a href="" className='text-indigo-400  cursor-pointer underline hover:text-indigo-600 mx-10'> I already have an account </a>
                    </div>
                </section>
            </div>
        </div>
           
    </div>
    )    
}