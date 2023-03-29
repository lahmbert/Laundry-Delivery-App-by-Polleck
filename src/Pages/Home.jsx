import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/hero-img.png'
import Contact from '../assets/images/logo-black.png'

import Helmet from '../Component/Helmet/Helmet'

import './styles/home.css'

const Home = () => {
  return (
    <Helmet title='Home' >

      {/**============= Hero ============== */}
      <div className='grid grid-cols-1 px-5 sm:pr-10 lg:mb-5 sm:grid-cols-2 py-5 bg-slate-500' >
        <div className=' items-center justify-center px-5 py-28 bg-slate-500'>
          <h1 className=' font-bold text-xl mb-5 bg-slate-500' >Mencuci tanpa menyentuh</h1>
          <h2 className=' text-teal-200 font-bold text-3xl mb-5 bg-slate-500'>PAKAIAN KOTOR? <span className=' bg-slate-500'> <br />Tunggu kami <span className=' bg-slate-500 flex'>di depan<h2 className=' text-[#df2020] pl-2 bg-slate-500'> Pintu</h2></span></span></h2>
          <p className=' mb-7 text-sm text-slate-300 bg-slate-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam perferendis voluptatibus ducimus modi voluptatum delectus commodi.
          </p>
          <div className=' mt-4 flex bg-slate-500 justify-left lg:gap-10 gap-5 md:gap-10 mx-auto  lg:pr-44'>
            <Link to='/login' className='py-1 pt-1.5 px-5 font-bold text-md rounded-md hover:bg-[#212245] duration-300 bg-teal-500' >Masuk</Link>
            <Link to='/service' className='py-1 px-5 font-bold text-md rounded-md bg-transparent border-slate-200 hover:border-teal-200 hover:text-teal-200 duration-300 border-2' >Service</Link>
          </div>
        </div>
        <div className=' px-0 bg-transparent items-center'>
          <img src={logo} alt="" className='logosum bg-transparent transition hover:ease-in duration-300 cursor-pointer lg:w-[300] lg:h-[500px] mb-10 text-center lg:mx-32 bg-slate-500' />
        </div>
      </div>


      {/** =============== Service ================= */}
      <div className='py-10 w-screen bg-slate-400'>

        <h1 className=' text-center mb-2 bg-slate-400 font-semibold text-6xl'>Service</h1>
        <p className=' text-slate-600 mb-10 bg-slate-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, minus.</p>
        <div className='px-4 bg-slate-400 mb-20 items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
          <div class="p-4 m-7 lg:w-64 bg-slate-500 shadow-md rounded-xl">
            <picture class=" bg-slate-500 rounded-lg block">
              <img
                src={logo} alt='' className=' bg-slate-500 hover:scale-125 rounded-lg my-3 mx-auto duration-300 h-40'
              />
            </picture>

            <h1 class="mt-4 mb-2 text-xl bg-slate-500 font-bold">Cuci Pakaian</h1>
            <p class="text-xs bg-slate-500 text-gray-600">
              Keterangan pendek tentang card di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.
            </p>
            <button className=' mt-3 bg-teal-500 hover:bg-[#212245] duration-300 px-4 rounded-md py-1'>Get Start</button>
          </div>

          <div class="p-4  m-7 lg:w-64 bg-slate-500 shadow-md rounded-xl">
            <picture class=" bg-slate-500 rounded-lg block">
              <img
                src={logo} alt='' className=' bg-slate-500 hover:scale-125 rounded-lg my-3 mx-auto duration-300 h-40'
              />
            </picture>

            <h1 class="mt-4 mb-2 text-xl bg-slate-500 font-bold">Cuci Pakaian</h1>
            <p class="text-xs bg-slate-500 text-gray-600">
              Keterangan pendek tentang card di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.
            </p>
            <button className=' mt-3 bg-teal-500 hover:bg-[#212245] duration-300 px-4 rounded-md py-1'>Get Start</button>
          </div>

          <div class="p-4 m-7 lg:w-64 bg-slate-500 shadow-md rounded-xl">
            <picture class=" bg-slate-500 rounded-lg block">
              <img
                src={logo} alt='' className=' bg-slate-500 hover:scale-125 rounded-lg my-3 mx-auto duration-300 h-40'
              />
            </picture>

            <h1 class="mt-4 mb-2 text-xl bg-slate-500 font-bold">Cuci Pakaian</h1>
            <p class="text-xs bg-slate-500 text-gray-600">
              Keterangan pendek tentang card di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.
            </p>
            <button className=' mt-3 bg-teal-500 hover:bg-[#212245] duration-300 px-4 rounded-md py-1'>Get Start</button>
          </div>

          <div class="p-4 m-7 lg:w-64 bg-slate-500 shadow-md rounded-xl">
            <picture class=" bg-slate-500 rounded-lg block">
              <img
                src={logo} alt='' className=' bg-slate-500 hover:scale-125 rounded-lg my-3 mx-auto duration-300 h-40'
              />
            </picture>

            <h1 class="mt-4 mb-2 text-xl bg-slate-500 font-bold">Cuci Pakaian</h1>
            <p class="text-xs bg-slate-500 text-gray-600">
              Keterangan pendek tentang card di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.
            </p>
            <button className=' mt-3 bg-teal-500 hover:bg-[#212245] duration-300 px-4 rounded-md py-1'>Get Start</button>
          </div>

        </div>
      </div>



      {/** ============= Contact  ================= */}
      <div className='header w-screen  mb-20'>
        <div className=' py-10 text-center grid grid-cols-1 w-full text-6xl font-semibold'>
          Contact
        </div>

        <div className='mb-32 grid grid-cols-1 text-center justify-center'>
          <div className='lg:w-[800px] w-auto rounded-lg shadow-md lg:mx-auto mx-4 md:w-auto md:mx-10 h-[420px] bg-slate-400 ' >
            <img src={Contact} alt='' className='my-10 bg-transparent w-[150px] mx-auto ' />
            <div className=' mx-4 bg-slate-400'>
              <h1 class="mt-4 my-4 text-xl bg-slate-400 font-bold">CEO</h1>
              <p class="text-xs my-4 bg-transparent text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo iste quidem illum corporis animi deserunt, excepturi numquam ipsam dolore nisi neque, porro illo omnis consectetur, iure facere sint odio.
              </p>
            </div>
              <button className='mt-3 bg-teal-500 hover:bg-[#212245] duration-300 px-4 rounded-md py-1'>Contact Me</button>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Home