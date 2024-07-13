import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


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
            <div className="my-8">
                <BarChart
                    width={500}
                    height={300}
                    data={''}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </div>
        </div>
    );
};

export default AdminHome;