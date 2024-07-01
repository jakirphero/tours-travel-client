import { Outlet } from "react-router-dom";
import Navbar from "../shard/Navbar/Navbar";
import Footer from "../shard/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;