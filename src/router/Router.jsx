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
import Dashboard from "../layout/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import NewTours from "../pages/Dashboard/NewTours/NewTours";
import Payment from "../pages/Dashboard/payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

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
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "adminHome",
                element: <AdminHome></AdminHome>
            },
            {
                path: "allUser",
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: "manageItem",
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path: "newTours",
                element: <AdminRoute><NewTours></NewTours></AdminRoute>
            },
            //user route
            {
                path: "payment",
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
]);

export default router;