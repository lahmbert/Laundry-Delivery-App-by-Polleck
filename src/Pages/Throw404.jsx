import React from 'react'

import Helmet from '../Component/Helmet/Helmet'

import './styles/home.css'

const Throw404 = () => {
  return (
    <Helmet title='Not Found' className='w-screen' >
      <div className=" pt-12 number text-center bg-slate-500 w-screen ">404</div>
      <div className="w-screen pt-10 text bg-white text-slate-500 pb-40 text-center"><span className=' bg-white text-slate-500 '>Ooops...</span><br/>page not found</div>
    </Helmet>
  )
}

export default Throw404