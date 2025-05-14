import React from 'react';
import Logo from '../../assets/logo.png'
import { TbCoinFilled } from "react-icons/tb"

const Navber = () => {
    return (
        <div className="flex justify-between items-center">
            <img className="" src={Logo} alt="" />
            <div className='flex gap-12 items-center'>
                <div className='space-x-12'>
                    <button className='btn cursor-pointer font-medium text-gray-500 text-lg'>Home</button>
                    <button className='btn cursor-pointer font-medium text-gray-500 text-lg'>Fixture</button>
                    <button className='btn cursor-pointer font-medium text-gray-500 text-lg'>Teams</button>
                    <button className='btn cursor-pointer font-medium text-gray-500 text-lg'>Schedules</button>
                </div>
                <button className='flex items-center gap-3 btn cursor-pointer font-medium text-lg py-3 px-5 rounded-xl border border-gray-300'>0 Coin <span className='text-amber-500 text-2xl'><TbCoinFilled></TbCoinFilled></span></button>
            </div>
        </div>
    );
};

export default Navber;