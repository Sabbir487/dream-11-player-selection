import Navber from "../Navber/Navber";

const Header = ({ addCredits }) => {
    return (
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-5 md:mt-10">
            <Navber addCredits={addCredits}></Navber>
        </div>
    );
};

export default Header;