import sui from './assets/sui.png'

const IndexPage = () => {
  return (
    <div className='bg-emerald-50 ' >
      <div>
        <div className='flex flex-row-reverse justify-center items-center h-screen '>
          <section className="image px-5">
            <img src={sui} alt="sui-image" />          
          </section>
          <section className=" flex flex-col text-justify w-2/5 px-5 ">
            <h2 className='font-sans text-3xl leading-relaxed font-bold  space-x-3'>
              BUILD A SECURE, PRIVATE, AND COMMUNITY-DRIVEN EMAIL PLATFORM WHERE USERS HAVE FULL CONTROL OVER THEIR DATA AND IDENTITY.
            </h2> 
            <p className=' py-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur culpa, iste vero, ad accusantium tempore non eos ab commodi, fuga cum id corporis. Molestias possimus itaque non ab vitae fuga.
              Hic sequi sit odio autem natus excepturi fugiat voluptatibus eius, cumque beatae asperiores dolorum mollitia facere eveniet tempora nulla, aliquam earum saepe dolor ullam non officiis quam doloribus voluptates. Sapiente?
              Quisquam praesentium dolorem sed dicta neque labore vitae dignissimos! Nostrum optio commodi omnis aut rem repellendus. Perspiciatis ratione corrupti pariatur tempore distinctio, unde cupiditate sed laudantium repellat perferendis! Dolores, perferendis.
            </p>         
            <div className=' mt-4'>              
              <a href="" className='inline-block text-white bg-blue-500 py-2 px-3 hover:bg-blue-600 translate-y-0.5 rounded-lg'> Create new account </a>              
              <a href="" className='text-indigo-400 underline hover:text-indigo-600 mx-10'> I already have an account </a>
            </div>
          </section>
        </div>
      </div>
      
     
    </div>
  )
}

export default IndexPage
