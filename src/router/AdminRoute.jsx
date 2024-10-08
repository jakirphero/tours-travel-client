import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../hook/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <span className="loading loading-spinner loading-xs"></span>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;