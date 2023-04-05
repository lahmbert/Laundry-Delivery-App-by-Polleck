import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import product from '../assets/fake-data/Service'
import logo from '../assets/images/hero-img.png'
import Contact from '../assets/images/logo-black.png'


import Helmet from '../Component/Helmet/Helmet'
import './styles/home.css'
import ServiceCard from '../Component/UI/ServiceCard'

const categoryItem = [
  {
    nama: 'Pakaian',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, illum?'
  },
  {
    nama: 'Sepatu',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, illum?'
  },
  {
    nama: 'Karpet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, illum?'
  },
  {
    nama: 'Lainnya',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, illum?'
  },
]


const Home = () => {

  const [category, setCategory] = useState('ALL')
  const [allService, setAllService] = useState(product)

  useEffect(() => {

    if (category === 'ALL') {
      setAllService(product)
    }

    if (category === 'Pakaian') {
      const Pakaian = product.filter(item => item.category === 'Pakaian')

      setAllService(Pakaian)
    }

    if (category === 'Sepatu') {
      const Sepatu = product.filter(item => item.category === 'Sepatu')

      setAllService(Sepatu)
    }

    if (category === 'Karpet') {
      const Karpet = product.filter(item => item.category === 'Karpet')

      setAllService(Karpet)
    }

  }, [category])



  return (
    <Helmet title='Home' >

      {/**============= Hero ============== */}
      <div className='grid grid-cols-1 px-5 sm:pr-10 sm:grid-cols-2 py-5 bg-slate-500' >
        <div className=' items-center justify-center px-5 py-28 bg-slate-500'>
          <h1 className=' font-bold text-xl mb-5 bg-slate-500' >Mencuci tanpa menyentuh</h1>
          <h2 className=' text-teal-200 font-bold text-3xl mb-5 bg-slate-500'>PAKAIAN KOTOR? <span className=' bg-slate-500'> <br />Tunggu kami <span className=' bg-slate-500 flex'>di depan<h2 className=' text-[#df2020] pl-2 bg-slate-500'> Pintu</h2></span></span></h2>
          <p className=' mb-7 text-sm text-slate-300 bg-slate-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam perferendis voluptatibus ducimus modi voluptatum delectus commodi.
          </p>
          <div className=' mt-4 flex bg-slate-500 justify-left lg:gap-10 gap-5 md:gap-10 mx-auto  lg:pr-44'>
            <Link to='/login' className='py-1 pt-1.5 px-5 font-bold text-md rounded-md hover:bg-[#212245] duration-300 bg-teal-500' >Masuk</Link>
            <Link to='/service' className='py-1 px-5 font-bold text-md rounded-md bg-transparent border-slate-200 hover:border-teal-400 hover:text-teal-400 duration-300 border-2' >Service</Link>
          </div>
        </div>
        <div className=' px-0 bg-transparent items-center'>
          <img src={logo} alt="" className='logosum bg-transparent transition hover:ease-in duration-300 cursor-pointer lg:w-[300] lg:h-[500px] text-center lg:mx-32 bg-slate-500' />
        </div>
      </div>


      {/** =============== Category ================= */}
      <div className='py-10 w-screen '>

        <h1 className=' text-center my-8  font-semibold text-6xl'>Category</h1>
        <p className=' text-slate-300 mb-10  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, minus.</p>
        <div className='px-4 container mx-auto lg:mx-5 gap-2 mb-20 items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
          {
            categoryItem.map((item,index) => (
              <div class="p-4 m-3 gap-2 w-auto bg-slate-400 shadow-md  rounded-xl">
                <picture class=" bg-transparent rounded-lg block">
                  <img
                    src={logo} alt='' className='mx-auto hover:scale-125 bg-transparent duration-300 rounded-lg py-3 h-28'
                  />
                </picture>

                <h1 class="mt-4 mb-2 text-xl bg-transparent font-bold">Cuci {item.nama}</h1>
                <p class="text-xs bg-transparent text-gray-600">
                  {item.desc}
                </p>
                <Link to='/service'>
                  <button className=' mt-3 px-8 bg-teal-500 hover:bg-[#212245] duration-300  rounded-md py-1'>Get Start</button>
                </Link>
              </div>
            ))
          }
        </div>
      </div>

      {/** ============= Popular Service  ================= */}
      <h1 className=' text-center  font-semibold text-6xl'>Our Service</h1>
        <div className='px-4 container mx-auto items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'></div>
      <div className='grid grid-cols-1 gap-10 mx-4'>
        <div className='mx-auto flex lg:gap-16 md:gap-10 gap-5 sm:px-24 my-7 rounded-lg py-4 bg-teal-500 px-10 lg:px-[23.5rem] md:px-[14rem] '>
          <button className={category === 'ALL' ? ' bg-slate-500  font-semibold py-1 lg:px-4 px-1 md:px-4 text-xs lg:text-base rounded-lg' : 'font-bold text-xs lg:text-base'} onClick={() => setCategory('ALL')}>All</button>
          <button className={category === 'Pakaian' ? ' bg-slate-500 font-semibold py-1 lg:px-4 px-1 md:px-4 lg:text-base text-xs lg:text-md rounded-lg' : 'font-bold text-xs lg:text-base'} onClick={() => setCategory('Pakaian')} >Pakaian</button>
          <button className={category === 'Karpet' ? ' bg-slate-500 font-semibold py-1 lg:px-4 px-1 md:px-4 text-xs lg:text-base rounded-lg' : 'font-bold text-xs lg:text-base'} onClick={() => setCategory('Karpet')} >Karpet</button>
          <button className={category === 'Sepatu' ? ' bg-slate-500 font-semibold py-1 lg:px-4 px-1 md:px-4 text-xs lg:text-base rounded-lg' : 'font-bold text-xs lg:text-base'} onClick={() => setCategory('Sepatu')} >Sepatu</button>
        </div>
      </div>
      <div className=' lg:mx-10 mb-20 items-center justify-center gap-0  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
        {
          allService.map(item => (
            <ServiceCard item={item} />
          ))
        }

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