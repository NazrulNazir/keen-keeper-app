import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';

const Timeline = () => {
  const { allData } = useContext(UserContext);
  const users = allData.userData;

  const [catagory, setcatagory] = useState('');

  const getValue = (value) => {
    setcatagory(value);
  }
  console.log(catagory)
  const filters = catagory === '' ? users : users.filter(user => user.catagory === catagory);
  console.log(filters)


  return (
    <div className='px-5 md:px-10 lg:px-20 my-10'>
      <h1 className='text-5xl font-semibold'>Timeline</h1>
      <div className='my-5'>
        <select defaultValue="Color scheme" className="select select-base-300">
          <option onClick={(e) => getValue(e.target.value)} value={''}>All Issues</option>
          <option onClick={(e) => getValue(e.target.value)} value={'Call'}>Calls</option>
          <option onClick={(e) => getValue(e.target.value)} value={'Text'}>Texts</option>
          <option onClick={(e) => getValue(e.target.value)} value={'Video'}>Videos</option>
        </select>
      </div>
      <div>
        {filters.map((user, index) => (
          <div key={index}>
            <div className='flex flex-col gap-5 mb-5'>
              <div className='flex gap-4 justify-start items-center bg-base-100 px-5 py-5 rounded-xl'>
                <img className='w-6 h-6' src={user.icon} alt={user.icon} />
                <div>
                  <p className='text-neutral-600'><span className='text-lg text-[#244D3F] font-bold'>{user.catagory}</span> with {user.name}</p>
                  <p className='text-neutral-600'>{user?.time}</p>
                </div>
              </div>
            </div>
          </div>))}
      </div>
    </div>
  )
}

export default Timeline
