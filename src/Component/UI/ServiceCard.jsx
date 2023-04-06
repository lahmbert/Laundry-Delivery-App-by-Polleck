import React from 'react'
import { NavLink } from 'react-router-dom'

const ServiceCard = (props) => {

    const { id, image, title, desc, price } = props.item
    return (
        <div class="p-4 m-3 gap-2 w-auto bg-slate-400 shadow-md  rounded-xl">
            <picture class=" bg-slate-400 rounded-lg block">
                <img
                    src={image} alt='' className=' bg-slate-400 mx-auto hover:scale-125 bg-transparent duration-300 rounded-lg py-3 h-28'
                />
            </picture>

            <NavLink to={`/service/${id}`}>
                <h1 class="mt-4 mb-2 text-xl bg-slate-400 font-bold">{title}</h1>
            </NavLink>
            <p class="text-xs bg-slate-400 text-gray-600">
                {desc}
            </p>
            <div className=' bg-slate-400 flex gap-5 items-center justify-between'>
                <h1 className='bg-transparent mt-3 py-1' >Rp {price} ,-</h1>
                <button className=' mt-3 px-5 bg-teal-500 hover:bg-[#212245] duration-300  rounded-md py-1'>Add to cart</button>
            </div>
        </div>
    )
}

export default ServiceCard