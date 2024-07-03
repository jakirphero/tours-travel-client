import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Discover from "../pages/Discover/Discover";
import Error from "../component/Error/Error";
import Services from "../pages/Services/Services";
import AllServices from "../pages/Services/AllServices";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "discover",
                element: <Discover></Discover>
            },
            {
                path: "services",
                element: <Services></Services>
            },
            {
                path: "allServices/:category",
                element: <AllServices></AllServices>
            },
            {
                path: "about",
                element: <About></About>
            }
        ]
    },
]);

export default router;