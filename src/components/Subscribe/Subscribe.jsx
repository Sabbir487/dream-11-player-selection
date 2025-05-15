import "./Subscribe.css"

const Subscribe = () => {
    return (
        <div className="text-center bg-white py-22 px-3 bg-custom-css rounded-2xl">
            <h2 className="font-bold text-4xl">Subscribe to our Newsletter</h2>
            <p className="font-medium text-xl mt-4 mb-6 text-gray-500">Get the latest updates and news right in your inbox!</p>
            <div className="flex gap-4 justify-center items-center">
                <input className="border border-gray-300 py-4 pr-28 px-6 rounded-xl" type="text" placeholder="Enter your email" />
                <button className="btn-grad font-bold">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;