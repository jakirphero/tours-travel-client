import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../hook/useAdmin";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
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
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (path) => location.pathname === path ? 'text-orange-400' : '';
    return (
        <nav className={`p-4 fixed z-10 w-full transition-colors duration-300 opacity-70 ${scrollPosition > 50 ? 'bg-neutral text-neutral-content' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to="/"><b className="text-orange-600">Tour</b> & Travel</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className={`text-white hover:text-gray-300 ${isActive('/')}`}>Home</Link>
                    <Link to="/discover" className={`text-white hover:text-gray-300 ${isActive('/discover')}`}>Discover</Link>
                    <Link to="/services" className={`text-white hover:text-gray-300 ${isActive('/services')}`}>Services</Link>
                    <Link to="/news" className={`text-white hover:text-gray-300 ${isActive('/news')}`}>News</Link>
                    <Link to="/about" className={`text-white hover:text-gray-300 ${isActive('/about')}`}>About Us</Link>
                    <Link to="/contact" className={`text-white hover:text-gray-300 ${isActive('/contact')}`}>Contact</Link>

                    {
                        user && isAdmin && <Link to="/dashboard/adminHome" className={`text-white hover:text-gray-300 ${isActive('/dashboard/adminHome')}`}>Dashboard</Link>
                    }

                    {
                        user && !isAdmin && <Link to="/dashboard/userHome" className={`text-white hover:text-gray-300 ${isActive('/dashboard/userHome')}`}>Dashboard</Link>
                    }

                </div>
                <div className="text-white">
                    {
                        user ? <>
                            <p className=" text-green-500 text-center">{user.displayName}</p>
                        </> : <>
                            <Link to={'/singIn'}><FontAwesomeIcon icon={faUser} className="h-6 w-6" /></Link>
                        </>
                    }
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                        <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <Link to="/" className={`block text-white px-2 py-1 ${isActive('/')}`}>Home</Link>
                <Link to="/discover" className={`block text-white px-2 py-1 ${isActive('/discover')}`}>Discover</Link>
                <Link to="/services" className={`block text-white px-2 py-1 ${isActive('/services')}`}>Services</Link>
                <Link to="/news" className={`block text-white px-2 py-1 ${isActive('/news')}`}>News</Link>
                <Link to="/about" className={`block text-white px-2 py-1 ${isActive('/about')}`}>About Us</Link>
                <Link to="/contact" className={`block text-white px-2 py-1 ${isActive('/contact')}`}>Contact</Link>
                {
                    user && isAdmin && <Link to="/dashboard/adminHome" className={`text-white hover:text-gray-300 ${isActive('/dashboard/adminHome')}`}>Dashboard</Link>
                }

                {
                    user && !isAdmin && <Link to="/dashboard/userHome" className={`text-white hover:text-gray-300 ${isActive('/dashboard/userHome')}`}>Dashboard</Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;
