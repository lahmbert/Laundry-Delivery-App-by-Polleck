import React from 'react'
import Helmet from '../Component/Helmet/Helmet'

const Login = () => {
    return (
        <Helmet title='Login' >
            <h1 className='px-7 py-7 pl-10 text-3xl lg:my-5 mb-8 font-extrabold w-screen bg-slate-400'>Contact</h1>
            
                <div className='grid grid-cols-1 mx-auto items-center justify-center sm:w-[300px] p-4 lg:my-20 lg:mb-40 lg:px-10 m-8 lg:w-[350px] h-[200px] bg-slate-600 ' >
                    <input type="email" className=' placeholder:text-slate-400 py-1 bg-transparent focus:outline-none border-b border-b-slate-500' placeholder='Email' />
                    <input type="password" className=' placeholder:text-slate-400 py-1 bg-transparent focus:outline-none border-b border-b-slate-500' placeholder='Password' />
                    <button className='bg-teal-400 hover:bg-[#212245] duration-300  rounded-lg mx-20 py-2' >Login</button>
                </div>
            
        </Helmet>
    )
}

export default Login