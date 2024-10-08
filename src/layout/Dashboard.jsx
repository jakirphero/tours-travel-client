import { FaHome, FaList, FaUsers, } from "react-icons/fa";
import { FaBookAtlas, FaCity } from "react-icons/fa6";
import { NavLink, Outlet} from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const { logOut } = useContext(AuthContext);
    
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    };

    
    return (
        <div className="flex">
            <div className="w-1/4 text-black border-r-2 h-screen p-4">
                <ul className="p-4">
                    {isAdmin ?
                        <>
                            <li className="mb-4 hover:text-green-500">
                                <NavLink to={'/dashboard/adminHome'} className="text-lg flex items-center">
                                    <FaHome className="mr-2" />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li className="mb-4 hover:text-green-500">
                                <NavLink to={'/dashboard/newTours'} className="text-lg flex items-center">
                                    <FaCity className="mr-2" />
                                    New Tours
                                </NavLink>
                            </li>
                            <li className="mb-4 hover:text-green-500">
                                <NavLink to={'/dashboard/allUser'} className="text-lg flex items-center">
                                    <FaUsers className="mr-2" />
                                    All Users
                                </NavLink>
                            </li>
                            <li className="mb-4 hover:text-green-500">
                                <NavLink to={'/dashboard/manageItem'} className="text-lg flex items-center">
                                    <FaList className="mr-2" />
                                    Manage Items
                                </NavLink>
                            </li>
                            <li className="mb-4 hover:text-green-500">
                                <NavLink to={'/dashboard/manageBooking'} className="text-lg flex items-center">
                                    <FaBookAtlas className="mr-2" />
                                    Manage Booking
                                </NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li className="mb-4 hover:text-green-500">
                                <NavLink to={'/dashboard/userHome'} className="text-lg flex items-center">
                                    User Home
                                </NavLink>
                            </li>
                            <li className="mb-4 hover:text-green-500">
                                <NavLink to={'/dashboard/paymentHistory'} className="text-lg flex items-center">
                                    Payment History
                                </NavLink>
                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    <li className="mb-4 hover:text-green-500">
                        <NavLink to={'/'} className="text-lg flex items-center">
                            Home
                        </NavLink>
                    </li>
                    <li className="mb-4">
                        <button onClick={handleLogout} className="hover:text-green-500">Log Out</button>
                    </li>
                </ul>
            </div>
            <div className="w-3/4 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;