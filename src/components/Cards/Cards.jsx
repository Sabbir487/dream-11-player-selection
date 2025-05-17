import { IoFlagSharp } from "react-icons/io5";

const Cards = ({ card, handleCart }) => {
    const { banner, img, name, country, type, batting_type, batting_hand, price } = card;
    return (
        <div className="p-2 md:p-3 lg:p-6 border border-gray-200 rounded-2xl">
            <img className="w-full h-58 rounded-xl object-cover" src={banner} alt="" />
            <div className="flex gap-3 items-center mt-6">
                <img className="w-10 h-10 rounded-full object-cover" src={img} alt="" />
                <h2 className="text-xl font-semibold">{name}</h2>
            </div>
            <div className="flex justify-between font-bold mt-4">
                <div className="flex gap-3 items-center text-gray-500">
                    <span className="text-xl"><IoFlagSharp /></span>
                    <p>{country}</p>
                </div>
                <p className="py-2 px-3 border border-gray-200 bg-gray-100 rounded-lg">{type}</p>
            </div>
            <hr className="text-gray-200 my-4" />
            <p className="font-bold">Rating</p>
            <div className="font-semibold flex justify-between mt-4">
                <p>{batting_type}</p>
                <p className="text-gray-500">{batting_hand}</p>
            </div>
            <div className="font-semibold mt-5 flex justify-between items-center">
                <p>Price: ${price}</p>
                <button onClick={() => handleCart(card)} className="cursor-pointer btn btn-lg py-2 px-3 border border-gray-200 bg-gray-100 rounded-md hover:text-white hover:bg-gradient-to-r from-red-500 to-orange-500">Choose Player</button>
            </div>
        </div>
    );
};

export default Cards;