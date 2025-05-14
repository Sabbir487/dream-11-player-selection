import Hero from "../Hero/Hero";

const Main = ({ handleAddCredits }) => {
    return (
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-10">
            <Hero handleAddCredits={handleAddCredits}></Hero>
        </div>
    );
};

export default Main;