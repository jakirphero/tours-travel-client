import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shard/Navbar/Navbar";
import Footer from "../shard/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('singIn') || location.pathname.includes('singUp') || location.pathname.includes('cart');

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;