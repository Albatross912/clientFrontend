import React, { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import logoImage from "../../../public/blacklogo.png";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const accountBtnRef = useRef(null);
    const { pathname } = useLocation();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser", null);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="w-full bg-white shadow-md relative z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src={logoImage} alt="Logo" className="w-10 h-10" />
                        <h1 className="text-2xl font-bold ml-4">ONLINE BARBER PLATFORM</h1>
                    </Link>

                    {/* Burger button for mobile menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-800 focus:outline-none ml-4"
                    >
                        {/* Icon for burger menu */}
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation links */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/about" className="hover:text-gray-400 ml-4">About</Link>
                    <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                    <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
                    <Link to="/BarberHelpPage" className="hover:text-gray-400">Help</Link>
                </div>

                {/* Sign In button */}
                <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    <Link to="/login">Sign In</Link>
                </button>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg z-40">
                        <div className="flex flex-col space-y-2 py-4 px-4">
                            <Link to="/about" className="hover:text-gray-400">About</Link>
                            <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                            <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
                            <Link to="/BarberHelpPage" className="hover:text-gray-400">Help</Link>
                            {/* Add other links here */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
