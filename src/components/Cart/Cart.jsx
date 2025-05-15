import { MdDeleteForever } from "react-icons/md";

const Cart = ({ cart, handleRemove }) => {
    const { img, name, batting_hand } = cart;
    return (
        <div className="flex justify-between items-center mb-6 border border-gray-300 p-2 md:p-3 lg:p-4 rounded-2xl ">
            <div className="flex items-center gap-3 lg:gap-6">
                <img className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl object-cover" src={img} alt="" />
                <div className="md:space-y-2">
                    <h2 className="text-base md:text-xl font-semibold">{name}</h2>
                    <p className="text-sm md:text-base text-gray-500">{batting_hand}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemove(cart)} className="p-2 md:p-5 text-red-500 rounded-lg md:rounded-2xl text-2xl bg-gray-200 border border-gray-300 cursor-pointer"><MdDeleteForever /></button>
            </div>
        </div>
    );
};

export default Cart;