import React from 'react'

const Error = () => {
  return (
    <div className='flex flex-col items-center h-[100vh] justify-center'>
        <h1 className='text-6xl text-pink-600 font-bold'>Oops!</h1>
        <p className='my-8 text-xl text-center'>Sorry, an unexpected error has occurred.</p>
        <p className='text-neutral-500 italic text-xl font-semibold'>Not Found..</p>
    </div>
  )
}

export default Error
