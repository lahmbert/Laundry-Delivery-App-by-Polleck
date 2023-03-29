import React from 'react'
import Helmet from '../Component/Helmet/Helmet'
import ceoImg from '../assets/images/logo-black.png'

const Contact = () => {
  return (
    <Helmet title='Contact'>
      <h1 className='px-7 py-7 pl-10 text-3xl lg:my-5 mb-8 w-screen font-extrabold bg-slate-400'>Contact</h1>
      <div className=' mb-32 grid text-center  lg:mx-20 items-center justify-center'>
        <div class="p-4 px-10 mx-4 bg-slate-400 shadow-md rounded-xl lg:mx-20 lg:w-[800px] m-10 md:px-5">
          <picture class=" bg-slate-400 rounded-lg block">
            <img
              src={ceoImg} alt='' className=' bg-slate-400 w-auto rounded-full lg:mx-[310px] sm:mx-40 md:mx-44 sm:h-auto py-3 hover:scale-125 bg-transparent duration-300 cursor-pointer  lg:h-40'
            />
          </picture>
          <div className=' mx-4 bg-slate-400'>
            <h1 class="mt-4 mb-2 text-xl bg-slate-400 font-bold">CEO</h1>
            <p class="text-xs bg-slate-400 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo iste quidem illum corporis animi deserunt, excepturi numquam ipsam dolore nisi neque, porro illo omnis consectetur, iure facere sint odio.
            </p>
            <button className=' mt-3 bg-teal-500 hover:bg-[#212245] duration-300 px-4 rounded-md py-1'>Contact Me</button>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Contact