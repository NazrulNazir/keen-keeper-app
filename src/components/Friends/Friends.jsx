import React from 'react'
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const Friends = ({ friend }) => {
  const { name, status, picture, tags, days_since_contact } = friend;

  return (
    <Link onClick={()=> toast.success(`${name} Details 🎉`)} to={`/${friend.id}`} className='text-center flex flex-col justify-center items-center bg-base-100 rounded-lg px-4 py-6'>
      <img className='rounded-full my-4' src={picture} alt={name} />
      <h3 className='text-xl sm:text-2xl font-semibold'>{name}</h3>
      <p className='py-2 text-neutral-500'>{days_since_contact}d din ago.</p>
      <div className='flex gap-2 mb-3'>
        <p className='bg-green-200 px-6 py-1.5 rounded-full'>{tags[0]}</p>
        <p className='bg-green-200 px-3 py-1.5 rounded-full'>{tags[1]}</p>
      </div>
      <button className={`${status === 'almost due' && 'bg-amber-500'} ${status === 'overdue' && 'bg-red-500'}  ${status === 'on-track' && 'bg-green-950'} px-5 py-1.5 rounded-full text-white mt-2`}>{status}</button>
    </Link>
  )
}

export default Friends
