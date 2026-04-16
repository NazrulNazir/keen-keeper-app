import { useContext } from 'react';
import { DiVim } from 'react-icons/di';
import { WiMoonFull } from 'react-icons/wi';
import { Pie, PieChart, Tooltip } from 'recharts';
import { UserContext } from '../context/UserContext';


function Stats() {

  const { allData } = useContext(UserContext);
  const { count } = allData;

  const data02 = [
    { name: 'call', value: count.totalCall, fill: '#244d3f' },
    { name: 'text', value: count.totalText, fill: '#7f37f5' },
    { name: 'video', value: count.totalVideo, fill: '#37a163' }
  ];

  return (
    <div className='px-5 sm:px-10 lg:px-20 mb-10'>
      <h1 className='text-4xl font-bold text-neutral-800 mt-10 mb-5'>Friendship Analytics</h1>

      <div className=' bg-base-100 px-10 py-8 rounded-xl'>
        <h3 className='text-2xl font-bold text-[#244d3f]'>By Interaction Type</h3>
        <div className='flex flex-col justify-center items-center'>
          <PieChart
            width={500}
            height={350}
          >

            <Pie
              data={data02}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={5}
              fill="#000000"
            // label
            />

            <Tooltip />
          </PieChart>
          <div className='flex gap-5'>
            <div className='flex items-center gap-1 '>
              <span className='text-[#7f37f5]'><WiMoonFull /></span> <span>Text</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-[#244d3f]'><WiMoonFull /></span> <span>Call</span>
            </div>
            <div className='flex items-center gap-1 '>
              <span className='text-[#37a163]'><WiMoonFull /></span> <span>Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;