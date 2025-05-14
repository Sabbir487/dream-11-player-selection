import Banner from '../../assets/banner-main.png'
import './Hero.css'

const Hero = ({ handleAddCredits }) => {
    return (
        <div className='bg-black py-4 md:py-7 md:px-5 lg:py-20 lg:px-44 rounded-3xl bg-custom-css'>
            <div className='flex justify-center mb-3 md:mb-7'>
                <img className='w-20 h-16 md:-40 md:h-28 lg:w-64 lg:h-52' src={Banner} alt="" />
            </div>
            <div>
                <h1 className='text-white md:text-2xl lg:text-5xl font-bold text-center'>Assemble Your <br className='md:hidden' /> Ultimate Dream 11 Cricket Team</h1>
                <h3 className='text-gray-400 text-xs md:text-lg lg:text-2xl font-medium text-center md:mt-2 lg:mt-4'>Beyond Boundaries Beyond Limits</h3>
                <div className='w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto text-center mt-2 md:mt-4 lg:mt-6'>
                    <div className='inline-block color-b  rounded-2xl p-1'>
                        <button onClick={handleAddCredits} className='btn color rounded-xl py-2 px-3 text-xs md:py-3 md:px-6 md:text-base lg:py-3.5 lg:px-8 lg:text-lg cursor-pointer'>
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;