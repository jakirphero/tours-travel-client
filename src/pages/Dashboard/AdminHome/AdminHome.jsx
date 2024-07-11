import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-state'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-state')
            return res.data;
        }
    })
    return (
        <div>
            <Helmet>
                <title>Tours & Travel || Admin Home</title>
            </Helmet>
            <h2 className="text-2xl capitalize font-bold">
                <span className="text-green-500">hi! welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow mt-3">
                <div className="stat">
                    <div className="stat-title">All User</div>
                    <div className="stat-value">{stats.allUser}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">All Item</div>
                    <div className="stat-value">{stats.allPlace}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">All Booking</div>
                    <div className="stat-value">1,200</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;