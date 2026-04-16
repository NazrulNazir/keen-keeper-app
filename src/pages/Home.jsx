import React, { use } from 'react'
import { FaPlus } from "react-icons/fa6";
// import { useLoaderData } from 'react-router';
import Friends from '../components/Friends/Friends';

const Home = ({friedsPromise}) => {
    const frnds = use(friedsPromise);
    // console.log(frnds);
    // const friends = useLoaderData();
    // loading..
{/* <span className="loading loading-spinner loading-lg"></span> */}

    return (
        <div className='px-10 sm:px-20'>
            <div className=' text-center mt-15'>
                <h1 className='text-3xl sm:text-5xl font-bold text-neutral-800'>Friends to keep close in your life</h1>
                <p className='text-center text-neutral-700 my-4 max-w-150 mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className='flex justify-center items-center mx-auto gap-2 bg-[#244d3f] btn btn-ghost text-white text-md sm:text-lg'><FaPlus />Add a Friend</button>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 text-center my-10'>
                    <div className='bg-base-100 py-10 rounded-xl px-4'>
                        <h3 className='text-2xl text-[#244d3f] font-bold'>10</h3>
                        <p className='text-neutral-700 mt-2'>Total Friends</p>
                    </div>
                    <div className='bg-base-100 py-10 rounded-xl px-4'>
                        <h3 className='text-2xl text-[#244d3f] font-bold px-2'>3</h3>
                        <p className='text-neutral-700 mt-2'>On Track</p>
                    </div>
                    <div className='bg-base-100 py-10 rounded-xl px-4'>
                        <h3 className='text-2xl text-[#244d3f] font-bold px-2'>6</h3>
                        <p className='text-neutral-700 mt-2'>Need Attention</p>
                    </div>
                    <div className='bg-base-100 py-10 rounded-xl px-4'>
                        <h3 className='text-2xl text-[#244d3f] font-bold'>12</h3>
                        <p className='text-neutral-700 mt-2'>Interactions This Month</p>
                    </div>
                </div>
            </div>

            <hr />

            <div>
                <h2 className='text-2xl sm:text-3xl font-bold text-neutral-800'>Your Friends</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-8'>
                    {
                        frnds.map(friend => <Friends friend={friend} key={friend.id}></Friends>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Home
