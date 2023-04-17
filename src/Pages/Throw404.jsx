import React from 'react'

import Helmet from '../Component/Helmet/Helmet'

import './styles/home.css'

const Throw404 = () => {
  return (
    <Helmet title='Not Found' className='w-screen' >
      <section className="flex items-center h-full p-16 bg-gray-400 text-gray-100">
        <div className="container flex bg-transparent flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md bg-transparent text-center">
            <h2 className="mb-8 bg-transparent font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl bg-transparent text-gray-700 font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
            <p className="mt-4 mb-8 bg-transparent text-white">But dont worry, you can find plenty of other things on our homepage.</p>
            <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded bg-teal-500 hover:bg-[#212245]">Back to homepage</a>
          </div>
        </div>
      </section>
    </Helmet>
  )
}

export default Throw404