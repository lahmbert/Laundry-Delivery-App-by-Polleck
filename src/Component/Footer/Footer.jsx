import React from 'react'

import {BsInstagram, BsFacebook, BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'

import logo from '../../assets/images/logo-black.png'
import './footer.css'

const Footer = () => {
  return (
    <footer id='contact' className=' w-screen footer'>
      <div className='footer bg-slate-600 grid grid-cols-1   sm:grid-cols-2 px-10 lg:grid-cols-4 gap-6 sm:px-8  py-16' >
        <div className='bg-slate-600'>
          <ul className='mb-3 bg-slate-600'>
            <h1 className='bg-slate-600 text-center mb-5 font-extrabold text-xl'>
              <img src={logo} alt="" className=' bg-slate-600 mx-20 hover:scale-125 duration-300 w-16 text-center' />
            </h1>
            <li className=' bg-slate-600 mb-8 text-gray-400 text-xs' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia culpa nam, ex veniam sed ullam necessitatibus laborum fugiat perferendis fuga, modi perspiciatis in totam repudiandae. Laudantium fuga ratione vero illo!</li>
          </ul>
        </div>
        <div className='bg-slate-600'>
          <ul className='mb-3 bg-slate-600 '>
            <h1 className=' bg-slate-600  mb-4 font-extrabold text-xl'>Delivery Time</h1>
            <li className=' bg-slate-600  text-gray-200 font-bold' >Sunday - Monday</li>
            <li className=' bg-slate-600  text-gray-400 text-sm' >10.00 AM - 10.00 PM</li>
          </ul>
          <ul className=' bg-slate-600 mb-0'>
            <li className=' bg-slate-600  text-gray-200 font-bold' >Sunday - Monday</li>
            <li className=' bg-slate-600  text-gray-400 text-sm' >10.00 AM - 10.00 PM</li>

          </ul>
        </div>
        <div className='bg-slate-600'>
          <ul className=' bg-slate-600 mb-2'>
            <h1 className=' bg-slate-600  mb-2 font-extrabold text-xl'>Contact</h1>
            <li className=' bg-slate-600  text-gray-200 font-bold' >Location</li>
            <li className=' bg-slate-600  text-gray-400 text-sm' >Lorem ipsum dolor sit amet.</li>
          </ul>
          <ul className=' bg-slate-600 mb-2'>
            <li className=' bg-slate-600  text-gray-200 font-bold' >Phone</li>
            <li className=' bg-slate-600  text-gray-400 text-sm' >+123456789101</li>

          </ul>
          <ul className=' bg-slate-600 mb-2'>
            <li className=' bg-slate-600  text-gray-200 font-bold' >Email</li>
            <li className=' bg-slate-600  text-gray-400 text-sm' >exampel@mail.com</li>

          </ul>
        </div>
        <div className='bg-slate-600'>
          <ul className=' bg-slate-600 mb-5'>
            <h1 className=' bg-slate-600  mb-2 font-extrabold text-xl'>Newsletter</h1>
            <li className=' bg-slate-600  text-gray-400 text-sm' >Subscribe our newsletter</li>
          </ul>
          <div className='bg-slate-600'>
            <input type="email" placeholder='Enter your email' className=' text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 bg-slate-200 rounded px-5 focus:outline-none' />
            <button className=' sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mt-3 bg-teal-500 hover:bg-[#212245] duration-300 px-5 py-2.5 font-[Poppins rounded-md text-white'>Subscribe</button>
          </div>
        </div>
      </div>


      <div className='grid bg-transparent text-center sm:grid-cols-1 md:grid-cols-3 mr-0 md:mx-12 lg:grid-cols-3 pt-2 text-gray-400 text-sm pb-8'>
        <span className=' mb-8 md:text-left bg-transparent'>© 2023 Polleck | All Right Reserved.</span>
        <span className=' mb-8 text-center bg-transparent'>Terms • Privacy Policy</span>
        <span className=' mb-4  bg-transparent inline-flex text-center justify-center items-center gap-3'>
          <span className=' bg-gray-500  text-teal-500 text-xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 rounded-full p-2'>
            <BsFacebook className=' cursor-pointer bg-transparent' />
          </span>
          
          <span className=' bg-gray-500  text-teal-500 text-xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 rounded-full p-2'>
            <BsTwitter className=' cursor-pointer bg-transparent' />
          </span>
          
          <span className=' bg-gray-500  text-teal-500 text-xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 rounded-full p-2'>
            <BsGithub className=' cursor-pointer bg-transparent' />
          </span>
          
          <span className=' bg-gray-500  text-teal-500 text-xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 rounded-full p-2'>
            <BsLinkedin className=' cursor-pointer bg-transparent' />
          </span>
          
          <span className=' bg-gray-500  text-teal-500 text-xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 rounded-full p-2'>
            <BsInstagram className=' cursor-pointer bg-transparent' />
          </span>
          
        </span>
      </div>
    </footer>
  )
}

export default Footer