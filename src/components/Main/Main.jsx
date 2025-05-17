import Hero from "../Hero/Hero";
import Toogle from "../Toogle/Toogle";


const Main = ({ handleAddCredits, isActive, handleToogleBtn, cards, handleCart, carts, handleRemove }) => {
    return (
        <main className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-7 md:mt-10 mb-36 md:mb-64 lg:mb-90">
            <Hero handleAddCredits={handleAddCredits}></Hero>
            <Toogle handleRemove={handleRemove} carts={carts} handleCart={handleCart} cards={cards} isActive={isActive} handleToogleBtn={handleToogleBtn}></Toogle>
        </main>
    );
};

export default Main;