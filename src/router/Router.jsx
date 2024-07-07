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
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Cart from "../pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";

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
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "singIn",
                element: <Login></Login>
            },
            {
                path: "singUp",
                element: <SignUp></SignUp>
            },
            {
                path: "cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            }
        ]
    },
]);

export default router;