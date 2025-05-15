import Cart from "../Cart/Cart";

const Selected = ({ carts, handleRemove, handleToogleBtn }) => {

    return (
        <div>
            <h2 className="font-bold flex gap-2 text-sm md:text-3xl">Selected <span className="hidden md:block">Player</span> ({carts.length}/6)</h2>
            <div className="mt-10">
                {
                    carts.map((cart) => <Cart handleRemove={handleRemove} cart={cart}></Cart>)
                }
                <div className='inline-block border border-purple-500 rounded-2xl p-1 mt-5'>
                    <button onClick={() => handleToogleBtn("available")} className='btn color rounded-xl py-2 px-3 text-xs font-bold md:py-3 md:px-6 md:text-base lg:py-3.5 lg:px-8 lg:text-lg cursor-pointer'>
                        Add More Player
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Selected;