import FooterLogo from "../../assets/logo-footer.png"
import Subscribe from "../Subscribe/Subscribe";
import "../Subscribe/Subscribe.css"

const Footer = () => {
    return (
        <footer className="bg-black pt-28 md:pt-48 lg:pt-60 relative">
            <div className="w-11/12 md:w-10/12 lg:w-9/12 mb-16 p-2 md:p-5 border border-gray-200 rounded-3xl absolute left-4 md:left-16 lg:left-60 -top-25 md:-top-44 lg:-top-50">
                <Subscribe></Subscribe>
            </div>
            <div className="flex cursor-pointer justify-center mb-10 md:mb-16 lg:mb-26">
                <img src={FooterLogo} alt="" />
            </div>
            <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex flex-col space-y-6 md:space-y-10 lg:flex-row justify-between">
                <div>
                    <h2 className="mb-4 text-white font-semibold text-lg">About Us</h2>
                    <p className="text-gray-400">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </div>
                <div>
                    <h2 className="mb-4 text-white font-semibold text-lg">Quick Links</h2>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="/">• Home</a></li>
                        <li><a href="/">• Services</a></li>
                        <li><a href="/">• About</a></li>
                        <li><a href="/">• Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-4 text-white font-semibold text-lg">Subscribe</h2>
                    <p className="text-gray-400">Subscribe to our newsletter for the <br /> latest updates.</p>
                    <div className="mt-5">
                        <input className="bg-white text-black placeholder:pl-4 md:placeholder:pl-0 focus:outline-none placeholder:text-gray-400 border border-gray-200 py-3 md:px-10 rounded-l-xl" type="text" placeholder="Enter your email" />
                        <button className="btn-grad py-[13px] px-2 md:px-6 font-bold rounded-r-xl">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className="text-gray-700 mt-7 md:mt-14" />
            <div className="py-5 md:py-8">
                <p className="text-gray-400 text-center text-sm md:text-base font-medium">@2025 R S T Sabbir All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;