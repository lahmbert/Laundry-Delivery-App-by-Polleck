import React from 'react'
import { NavLink } from 'react-router-dom'

const ServiceCard = (props) => {

    const { id, image, title, desc } = props.item
    return (
        <div class="p-4 m-3 gap-2 w-auto bg-slate-400 shadow-md  rounded-xl">
            <picture class=" bg-slate-400 rounded-lg block">
                <img
                    src={image} alt='' className=' bg-slate-400 hover:scale-125 bg-transparent duration-300 rounded-lg py-3 mx-12 h-28'
                />
            </picture>

            <h1 class="mt-4 mb-2 text-xl bg-slate-400 font-bold">{title}</h1>
            <p class="text-xs bg-slate-400 text-gray-600">
                {desc}
            </p>
            <NavLink to={`/service/${id}`}>
                <button className=' mt-3 px-8 bg-teal-500 hover:bg-[#212245] duration-300  rounded-md py-1'>Get Start</button>
            </NavLink>
        </div>
    )
}

export default ServiceCard