import Available from "../Available/Available";
import Selected from "../Selected/Selected";
import "./Toogle.css"

const Toogle = ({ handleToogleBtn, isActive, cards, handleCart, carts, handleRemove }) => {
    return (
        <div className="mt-8 md:mt-16 relative mb-16">
            <div>
                {
                    isActive ? <Available handleCart={handleCart} cards={cards}></Available> : <Selected handleRemove={handleRemove} handleToogleBtn={handleToogleBtn} carts={carts}></Selected>
                }
            </div>

            <div className="absolute right-0 -top-1 md:-top-2">
                <button onClick={() => handleToogleBtn("available")} className={`font-bold py-1 px-2 md:py-3 md:px-7 border text-xs md:text-base border-gray-200 rounded-l-xl cursor-pointer ${isActive ? "active" : ""}`}>Available</button>
                <button onClick={() => handleToogleBtn("selected")} className={`font-bold py-1 px-2 md:py-3 md:px-7 border text-xs md:text-base border-gray-200 rounded-r-xl cursor-pointer ${isActive ? "" : "active"}`}>Selected ({carts.length})</button>
            </div>
        </div>
    );
};

export default Toogle;