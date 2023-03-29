import React from 'react'

import Helmet from '../Component/Helmet/Helmet'



import product from '../assets/fake-data/Service'
import ServiceCard from '../Component/UI/ServiceCard'
import { useState, useEffect } from 'react'


const Service = () => {

  const [category, setCategory] = useState('ALL')
  const [allService, setAllService] = useState(product)

  useEffect(()=>{

    if (category === 'ALL') {
      setAllService(product)
    }

    if (category === 'Pakaian') {
      const Pakaian = product.filter(item=>item.category === 'Pakaian')

      setAllService(Pakaian)
    }

    if (category === 'Sepatu') {
      const Sepatu = product.filter(item=>item.category === 'Sepatu')

      setAllService(Sepatu)
    }

    if (category === 'Karpet') {
      const Karpet = product.filter(item=>item.category === 'Karpet')

      setAllService(Karpet)
    }

  },[category])



  return (
    <Helmet title='Service' >

      <h1 className='px-7 py-7 pl-10 w-screen text-3xl lg:mb-10 mb-8 font-extrabold bg-slate-400'>Service</h1>

      <div className='grid grid-cols-4 lg:grid-cols-4 justify-center items-center lg:mx-80 mx-4 py-4 lg:px-20 md:px-10 bg-teal-500 rounded-xl lg:my-5 mb-10 md:mx-40'>
        <button className={category === 'ALL' ? ' bg-slate-500 mx-4 font-semibold text-md rounded-lg' : 'font-bold'} onClick={()=> setCategory('ALL')}>All</button>
        <button className={category === 'Pakaian' ? ' bg-slate-500 mx-4 font-semibold text-md rounded-lg' : 'font-bold' } onClick={()=> setCategory('Pakaian')} >Pakaian</button>
        <button className={category === 'Karpet' ? ' bg-slate-500 mx-4 font-semibold text-md rounded-lg' : 'font-bold'} onClick={()=> setCategory('Karpet')} >Karpet</button>
        <button className={category === 'Sepatu' ? ' bg-slate-500 mx-4 font-semibold text-md rounded-lg' : 'font-bold'} onClick={()=> setCategory('Sepatu')} >Sepatu</button>
      </div>
      <div className=' lg:mx-10 mb-20 items-center justify-center gap-0  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5'>
        {
          allService.map(item => (
            <ServiceCard item={item} />
          ))
        }

      </div>
    </Helmet>
  )
}

export default Service