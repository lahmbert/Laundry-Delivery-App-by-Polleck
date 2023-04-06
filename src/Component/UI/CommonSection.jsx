import React from 'react'

const CommonSection = (props) => {
  return (
    <h1 className='px-7 py-16 pl-12 w-screen text-4xl lg:mb-16 mb-8 font-extrabold bg-slate-400'>
      {
        props.title
      }
    </h1>
  )
}

export default CommonSection