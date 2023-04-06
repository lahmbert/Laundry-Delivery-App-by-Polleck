import React from 'react'

import CommonSection from '../Component/UI/CommonSection'
import Helmet from '../Component/Helmet/Helmet'
import product from '../assets/fake-data/Service'
import ServiceCard from '../Component/UI/ServiceCard'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import './styles/service.css'


const Service = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [pageNumber, setPageNumber] = useState(0)

  const searchedService = product.filter((item) => {
    if (searchTerm.value === '') {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log('Not Found')
    }
  })


  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedService.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedService.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };



  return (
    <Helmet title='Service' >

      <CommonSection title='Service' />

      <div className='my-10 mx-5 lg:mx-10 md:mx-3 lg:flex lg:justify-between grid grid-cols-1 md:flex md:justify-between'>
        <div className='lg:mx-3 flex gap-5'>
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search...' className='p-1.5 w-full text-gray-600 px-3 placeholder:text-gray-400 lg:w-[20rem] md:w-[20rem] rounded-sm bg-white focus:outline-none' />
          <button className=' bg-teal-500 lg:px-10 px-6 rounded-md hover:bg-[#212245] duration-300 '>Search</button>
        </div>
        <div className=' lg:mx-5'>
          <select name="" id="category" className='lg:w-[15rem] w-full justify-end md:w-[10rem] mt-5 lg:mt-0 md:mt-0 focus:outline-none p-1.5 rounded-sm bg-white text-gray-600'>
            <option>All</option>
            <option value="ascending">Alphabetically, A-Z</option>
            <option value="descending">Alphabetically, Z-A</option>
            <option value="high-price">High Price</option>
            <option value="low-price">Low Price</option>
          </select>
        </div>
      </div>
      <div className=' lg:mx-10 mb-10 items-center justify-center gap-0  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
        {
          displayPage.map(item => (
            <ServiceCard item={item} />
          ))
        }

      </div>

      <div className=''>
      <ReactPaginate className='flex paginationBttns justify-center gap-4 p-4'
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
      </div>
    </Helmet>
  )
}

export default Service