import React, { useState } from 'react'

const Timeline = () => {
  const [time, setTime] = useState('');
  const todayDate = () => {
    const today = new Date();
    const formattedDate = today.toDateString();
    setTime(formattedDate);
  }
  return (
    <div className='px-5 md:px-10 lg:px-20'>
      <h1 className='text-5xl font-semibold'>Timeline</h1>
      <div className='my-5'>
        <select defaultValue="Color scheme" className="select select-base-300">
          <option disabled={true}>Color scheme</option>
          <option>Light mode</option>
          <option>Dark mode</option>
          <option>System</option>
        </select>
      </div>
      <button
        onClick={() => {todayDate()}} className='btn btn-ghest bg-accent mb-4'>Today Time</button>
      <p>{time}</p>
    </div>
  )
}

export default Timeline
