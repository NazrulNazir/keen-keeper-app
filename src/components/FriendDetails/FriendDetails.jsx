import React, { useContext, useEffect } from 'react'
import { MdOutlineTextsms } from 'react-icons/md';
import { PiArchiveBold, PiVideoCameraBold } from 'react-icons/pi';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { TbPhoneCall } from 'react-icons/tb';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import { UserContext } from '../../context/UserContext';

const FriendDetails = () => {
    const { allData } = useContext(UserContext);
    const users = allData.userData;
    const friend = useLoaderData();
    const { name, email, bio, status, goal, next_due_date, picture, tags, days_since_contact } = friend;


    const todayDate = () => {
        const today = new Date();
        return today.toDateString();
    }

    const handleClick = () => {
        const time = todayDate();
        toast.success(`Call with ${name} 🎉`);

        allData.userFun({
            name,
            catagory: 'Call',
            time: time,
            icon: './assets/call.png'
        });
    };

    // pi chart show count

    const { communicationCountFun } = allData;

    const callCount = users.filter(usr => usr.catagory === 'Call');
    const textCount = users.filter(usr => usr.catagory === 'Text');
    const videoCount = users.filter(usr => usr.catagory === 'Video');

    const totalCall = callCount.length;
    const totalText = textCount.length;
    const totalVideo = videoCount.length;

    useEffect(() => {
        communicationCountFun({
            'totalCall': totalCall,
            'totalText': totalText,
            'totalVideo': totalVideo
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalCall, totalText, totalVideo]);

    return (
        <div className='px-5 md:px-10 lg:px-20 mt-10'>
            <div className='grid grid-cols-18 grid-rows-2  gap-5 mb-5'>
                <div className='bg-base-100 text-center col-span-18 lg:col-span-6 row-span-2 px-3 py-5 rounded-xl'>
                    <div className=''>
                        <img className='rounded-full my-4 mx-auto' src={picture} alt={name} />
                        <h3 className='text-xl sm:text-2xl font-semibold'>{name}</h3>
                        <button className={`${status === 'almost due' && 'bg-amber-500'} ${status === 'overdue' && 'bg-red-500'}  ${status === 'on-track' && 'bg-green-950'} px-5 py-1.5 rounded-full text-white mt-2`}>{status}</button>
                    </div>
                    <div className='flex justify-center gap-2 my-3'>
                        <p className='bg-green-200 px-6 py-1.5 rounded-full'>{tags[0]}</p>
                        <p className='bg-green-200 px-3 py-1.5 rounded-full'>{tags[1]}</p>
                    </div>
                    <div>
                        <p className='italic w-full lg:max-w-100 my-2 text-center'>"{bio}"</p>
                        <p>Preferred: {email}</p>
                    </div>
                </div>
                <div className='col-span-9 lg:col-span-4 row-span-1 bg-base-100 rounded-xl flex flex-col justify-center items-center py-15'>
                    <h3 className='text-green-900 text-2xl font-bold mb-2'>{days_since_contact}</h3>
                    <p className='text-neutral-600 '>Days Since Contact</p>
                </div>
                <div className='col-span-9 lg:col-span-4 row-span-1 bg-base-100 rounded-xl flex flex-col justify-center items-center py-15'>
                    <h3 className='text-green-900 text-2xl font-bold mb-2'>{goal}</h3>
                    <p className='text-neutral-600 '>Goal (Days)</p>
                </div>
                <div className='col-span-18 md:col-span-9 lg:col-span-4 row-span-1 bg-base-100 rounded-xl flex flex-col justify-center items-center py-15'>
                    <h3 className='text-green-900 text-2xl font-bold mb-2'>{next_due_date}</h3>
                    <p className='text-neutral-600 '>Next Due</p>
                </div>
                <div className='col-span-18 md:col-span-9 lg:col-span-12 row-span-1 bg-base-100 rounded-xl flex flex-col justify-center px-5 gap-3 py-15'>
                    <div className='flex justify-between items-center text-green-950 text-xl font-bold'>
                        <p>Relationship Goal</p>
                        <button className='btn btn-ghest'>Edit</button>
                    </div>
                    <p className='text-neutral-600'>Connect every <span className='font-bold text-neutral-800'>{goal} days</span></p>
                </div>
            </div>
            <div className='grid grid-cols-18 grid-rows-2  gap-5 mb-15'>
                <div className='col-span-18 md:col-span-9 lg:col-span-6 sm:row-span-2 rounded-xl flex flex-col gap-2'>
                    <div className='py-5 bg-base-100 rounded-xl text-center flex justify-center items-center gap-1.5'><RiNotificationSnoozeLine /> Snooze 2 weeks</div>
                    <div className='py-5 bg-base-100 rounded-xl text-center flex justify-center items-center gap-1.5'><PiArchiveBold /> Archive</div>
                    <div className='py-5 bg-base-100 rounded-xl text-center flex justify-center items-center gap-1.5 text-red-600' ><RiDeleteBinLine /> Delete</div>
                </div>
                <div className='grid grid-col-1 grid-rows-3 col-span-18 md:col-span-9 md:row-span-2 lg:col-span-12 bg-base-100 rounded-xl px-4'>
                    <p className='text-green-950 text-xl font-bold row-span-1 mt-2'>Quick Check-In</p>
                    <div className='grid grid-cols-3 gap-3 justify-center items-center text-center row-span-2 mb-3'>
                        <button onClick={handleClick} className='cursor-pointer bg-base-300 h-full rounded-lg flex flex-col justify-center py-8 md:py-0'>
                            <h3 className='mx-auto text-2xl text-neutral-800 mb-2'><TbPhoneCall /></h3>
                            <p>Call</p>
                        </button>
                        <button
                            onClick={() => {
                                const time = todayDate();

                                toast.success(`Text with ${name}`);

                                allData.userFun({
                                    name,
                                    catagory: 'Text',
                                    time: time,
                                    icon: './assets/text.png'
                                });
                            }} className='cursor-pointer bg-base-300 h-full rounded-lg flex flex-col justify-center'>
                            <h3 className='mx-auto text-2xl text-neutral-800 mb-2'><MdOutlineTextsms /></h3>
                            <p>Text</p>
                        </button>
                        <button
                            onClick={() => {
                                const time = todayDate();
                                toast.success(`Vieo with ${name}`);
                                allData.userFun({
                                    name,
                                    catagory: 'Video',
                                    time: time,
                                    icon: './assets/video.png'
                                });
                            }} className='cursor-pointer bg-base-300 h-full rounded-lg flex flex-col justify-center'>
                            <h3 className='mx-auto text-2xl text-neutral-800 mb-2'><PiVideoCameraBold /></h3>
                            <p>Video</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendDetails
