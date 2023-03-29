import React from 'react'

import Helmet from '../Component/Helmet/Helmet'



import product from '../assets/fake-data/Service'
import ServiceCard from '../Component/UI/ServiceCard'
import { useState, useEffect } from 'react'


const Service = () => {

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
    <Helmet title='Service' >

      <h1 className='px-7 py-12 pl-10 w-screen text-3xl lg:mb-10 mb-8 font-extrabold bg-slate-400'>Service</h1>

      <div className='grid grid-cols-1 gap-10 mx-4'>
        <div className='mx-auto flex lg:gap-20 gap-5 mx md:px-24 sm:px-24 my-7 rounded-lg py-4 bg-teal-500 px-10 lg:px-30'>
          <button className={category === 'ALL' ? ' bg-slate-500  font-semibold py-1 px-1 text-xs lg:text-base rounded-lg' : 'font-bold text-xs lg:text-base'} onClick={() => setCategory('ALL')}>All</button>
          <button className={category === 'Pakaian' ? ' bg-slate-500 font-semibold py-1 px-1 lg:text-base text-xs lg:text-md rounded-lg' : 'font-bold text-xs lg:text-base'} onClick={() => setCategory('Pakaian')} >Pakaian</button>
          <button className={category === 'Karpet' ? ' bg-slate-500 font-semibold py-1 px-1 text-xs lg:text-base rounded-lg' : 'font-bold text-xs lg:text-base'} onClick={() => setCategory('Karpet')} >Karpet</button>
          <button className={category === 'Sepatu' ? ' bg-slate-500 font-semibold py-1 px-1 text-xs lg:text-base rounded-lg' : 'font-bold text-xs lg:text-base'} onClick={() => setCategory('Sepatu')} >Sepatu</button>
        </div>
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