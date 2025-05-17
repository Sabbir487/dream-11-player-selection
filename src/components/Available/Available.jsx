import Cards from "../Cards/Cards";


const Available = ({ cards, handleCart }) => {

    return (
        <div>
            <h2 className="font-bold text-sm md:text-3xl">Available Players</h2>
            <div className='mx-auto mt-5 md:mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cards.map((card, idx) => <Cards key={idx} card={card} handleCart={handleCart}></Cards>)
                }
            </div>
        </div>
    );
};

export default Available;