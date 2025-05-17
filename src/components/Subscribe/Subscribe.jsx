import "./Subscribe.css"

const Subscribe = () => {
    return (
        <div className="text-center bg-white py-4 md:py-14 lg:py-22 px-1 md:px-3 bg-custom-css rounded-2xl">
            <h2 className="font-bold text-lg md:text-4xl">Subscribe to our Newsletter</h2>
            <p className="font-medium text-xs md:text-lg mt-1 md:mt-4 mb-3 md:mb-6 text-gray-500">Get the latest updates <br className="md:hidden" />and  news right in your inbox!</p>
            <div className="flex flex-col md:flex-row gap-1 md:gap-2 justify-center items-center">
                <input className="border py-1 px-3 border-gray-300 md:py-4 md:pr-28 md:px-6 rounded-xl" type="text" placeholder="Enter your email" />
                <button className="md:m-[10px] md:py-4 md:px-[30px] text-sm md:text-base py-2 px-19 btn-grad font-bold rounded-[10px]">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;