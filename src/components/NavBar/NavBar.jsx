import React from 'react'
import { NavLink } from 'react-router'
import { AiOutlineHome } from "react-icons/ai";
import { LuClock4 } from "react-icons/lu";
import { PiChartLineLight } from "react-icons/pi";

const NavBar = () => {
    return (
        <div className='shadow-sm bg-base-100'>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="flex-1">
                    <button className="text-xl sm:text-3xl font-bold">Keen<span className='text-green-900'>Keeper</span></button>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-md sm:text-lg font-semibold text-neutral-600">
                        <li><NavLink to={'/'}><AiOutlineHome className='text-md sm:text-xl font-bold' />Home</NavLink></li>
                        <li><NavLink to={'/timeline'}><LuClock4 />Timeline</NavLink></li>
                        <li><NavLink to={'/stats'}><PiChartLineLight />Stats</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
