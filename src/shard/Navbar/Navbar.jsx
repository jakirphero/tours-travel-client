import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return (
        <nav className={`p-4 fixed z-10 w-full transition-colors duration-300 opacity-70 ${scrollPosition > 50 ? 'bg-neutral text-neutral-content' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-lg font-bold">
                    <Link to="/"><b className="text-orange-600">Tour</b> & Travel</Link>
                </div>
                {/* Navbar links */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/discover" className="text-white hover:text-gray-300">Discover</Link>
                    <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
                    <Link to="/news" className="text-white hover:text-gray-300">News</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                </div>
                {/* User Icon */}
                <div className="text-white">
                    <Link to="/profile" className="hover:text-gray-300">
                        <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
                    </Link>
                </div>
                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                        <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <Link to="/" className="block text-white px-2 py-1">Home</Link>
                <Link to="/discover" className="block text-white px-2 py-1">Discover</Link>
                <Link to="/services" className="block text-white px-2 py-1">Services</Link>
                <Link to="/news" className="block text-white px-2 py-1">News</Link>
                <Link to="/about" className="block text-white px-2 py-1">About Us</Link>
                <Link to="/contact" className="block text-white px-2 py-1">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;