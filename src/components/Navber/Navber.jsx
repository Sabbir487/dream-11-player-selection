import Logo from '../../assets/logo.png'
import { TbCoinFilled } from "react-icons/tb"

const Navber = ({ addCredits }) => {
    return (
        <div className="flex justify-between items-center">
            <img className="w-12 h-12 lg:w-20 cursor-pointer lg:h-20 md:w-16 md:h-16" src={Logo} alt="" />
            <div className='flex gap-12 items-center'>
                <div className='space-x-12 hidden lg:block'>
                    <button className='btn cursor-pointer font-medium text-gray-500 text-lg'>Home</button>
                    <button className='btn cursor-pointer font-medium text-gray-500 text-lg'>Fixture</button>
                    <button className='btn cursor-pointer font-medium text-gray-500 text-lg'>Teams</button>
                    <button className='btn cursor-pointer font-medium text-gray-500 text-lg'>Schedules</button>
                </div>
                <button className='flex items-center gap-2 md:gap-3 btn cursor-pointer font-medium md:text-lg md:py-3 md:px-5 py-2 px-4 rounded-xl border border-gray-300'><span>${addCredits}</span> Coin <span className='text-amber-500 md:text-2xl'><TbCoinFilled></TbCoinFilled></span></button>
            </div>
        </div>
    );
};

export default Navber;