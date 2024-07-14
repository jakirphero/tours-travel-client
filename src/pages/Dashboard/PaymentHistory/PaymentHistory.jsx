import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    });
    console.log(payments)
    const handleDelete = ()=> {

    }

    return (
        <div>
            <h2 className="text-2xl font-bold capitalize">Your Payment History</h2>
            <h3 className="text-2xl font-bold">Total Payments: {payments.length}</h3>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">#</th>
                            <th className="py-3 px-6 text-left">Email</th>
                            <th className="py-3 px-6 text-center">Price</th>
                            <th className="py-3 px-6 text-center">Trx</th>
                            <th className="py-3 px-6 text-center">Date</th>
                            <th className="py-3 px-6 text-center">Status</th>
                            <th className="py-3 px-6 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {payments.map((item, index) => (
                            <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                                <td className="py-3 px-6">{item.email}</td>
                                <td className="py-3 px-6  text-green-600">${item.price}</td>
                                <td className="py-3 px-6">{item.transitionId}</td>
                                <td className="py-3 px-6">{item.date}</td>
                                <td className="py-3 px-6 text-yellow-500">{item.status}</td>
                                <td className="py-3 px-6 text-center">
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-primary btn-xs">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
