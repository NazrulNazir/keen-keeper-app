import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router'

const Error = () => {
  return (
    <div className='flex flex-col gap-5 items-center h-[100vh] justify-center px-5 sm:px-10 lg-px-20'>
        <h1 className='text-7xl text-pink-600 font-bold'>404</h1>
        <p className='text-neutral-500 italic text-3xl font-bold'>Page Not Found</p>
        <p className=' text-xl text-center max-w-150'>Looks like this friendship link is broken. The page you're looking for doesn't exist or has been moved.</p>
        <Link className='flex items-center gap-2 bg-[#244d3f] px-3 py-2 rounded-full text-white' to={'/'}><AiOutlineHome className='text-md sm:text-xl font-bold' />Back to Home</Link>
    </div>
  )
}

export default Error
