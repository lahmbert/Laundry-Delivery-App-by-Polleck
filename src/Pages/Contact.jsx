import React from 'react'
import Helmet from '../Component/Helmet/Helmet'
import ceoImg from '../assets/images/logo-black.png'

const Contact = () => {
  return (
    <Helmet title='Contact'>
      <h1 className='px-7 py-7 pl-10 text-3xl lg:my-5 mb-8 w-screen font-extrabold bg-slate-400'>Contact</h1>
      <div className='mb-32 grid grid-cols-1 text-center justify-center'>
          <div className='lg:w-[800px] w-auto rounded-lg shadow-md mx-auto md:w-auto md:mx-10 h-[420px] bg-slate-400 ' >
            <img src={ceoImg} alt='' className='my-10 bg-transparent w-[150px] mx-auto ' />
            <div className=' mx-4 bg-slate-400'>
              <h1 class="mt-4 my-4 text-xl bg-slate-400 font-bold">CEO</h1>
              <p class="text-xs my-4 bg-transparent text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo iste quidem illum corporis animi deserunt, excepturi numquam ipsam dolore nisi neque, porro illo omnis consectetur, iure facere sint odio.
              </p>
            </div>
              <button className='mt-3 bg-teal-500 hover:bg-[#212245] duration-300 px-4 rounded-md py-1'>Contact Me</button>
          </div>
        </div>
    </Helmet>
  )
}

export default Contact