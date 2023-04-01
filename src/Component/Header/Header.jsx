import React, { useState } from 'react'


import logo from '../../assets/images/logo-black.png'
import './header.css'


import { AiOutlineUser, AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom'

const navLink = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Service',
    path: '/service'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  
]


const Header = () => {

  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div className='header top-0 flex items-center justify-between p-5 px-10 w-screen' >
      <img src={logo} alt="logo" className='logo cursor-pointer hover:scale-150 duration-300' />
      <div className=' hidden md:flex items-center gap-11'>
        {
          navLink.map((item, index) => (
            <NavLink className={navClass => navClass.isActive ? ' font-bold text-teal-400' : ' font-bold text-white' } to={item.path} key={index}>{item.display}</NavLink>
          ))
        }
      </div>
      <div className=" flex items-center gap-4">
        <div className=' font-bold text-lg flex items-center gap-4'>
          <AiOutlineShopping />
          <Link to='/login' onClick={handleNav}  ><AiOutlineUser /></Link>
        </div>
        <div onClick={handleNav} className=' text-lg font-bold block md:hidden' >
          {!nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div className=' md:hidden'>
          <div className={!nav ? 'fixed left-0 top-0 w-[60%] ease-in-out duration-500 border-r border-r-gray-900 h-full bg-slate-500' : 'fixed left-[100%]'}>
            <img src={logo} alt="logo" className=' w-20 flex m-4 px-4 pt-6' />
            <ul className='p-4 uppercase'>
              {
                navLink.map((item, index) => (
                  <li className='p-4 font-bold border-b border-gray-600' onClick={handleNav}><NavLink to={item.path} key={index}>{item.display}</NavLink></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
