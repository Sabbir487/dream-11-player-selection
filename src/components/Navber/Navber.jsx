import Logo from '../../assets/logo.png'

const Navber = () => {
    return (
        <div className="flex justify-between">
            <img className="" src={Logo} alt="" />
            <div className='flex gap-12'>
                <button className='btn cursor-pointer text-lg'>Home</button>
                <button className='btn cursor-pointer text-lg'>Fixture</button>
                <button className='btn cursor-pointer text-lg'>Teams</button>
                <button className='btn cursor-pointer text-lg'>Schedules</button>
                <button>0 Coin</button>
            </div>
        </div>
    );
};

export default Navber;