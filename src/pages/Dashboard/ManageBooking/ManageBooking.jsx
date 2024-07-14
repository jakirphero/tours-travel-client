import { useQuery, useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

const ManageBooking = () => {
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments');
            return res.data;
        }
    });

    const confirmPayment = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecure.patch(`/payments/confirm/${id}`);
            return res.data;
        },
        onSuccess: () => {
            refetch();
        }
    });

    const handleConfirm = (id) => {
        confirmPayment.mutate(id);
    };

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/payments/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "delete successfully",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    };

    return (
        <div>
            <h2 className="text-2xl my-4">Total Booking: {payments.length}</h2>
            <div className="overflow-x-auto">
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
                                <td className="py-3 px-6 text-green-600">${item.price}</td>
                                <td className="py-3 px-6">{item.transitionId}</td>
                                <td className="py-3 px-6">{item.date}</td>
                                <td className="py-3 px-6 text-yellow-500">{item.status}</td>
                                <td className="py-3 px-6 text-center">
                                    {
                                        item.status === 'confirm' ?
                                            <button onClick={() => handleDelete(item)} className="btn btn-outline btn-sm">
                                                <FaDeleteLeft className="text-2xl"></FaDeleteLeft>
                                            </button> :
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={() => handleConfirm(item._id)}
                                            >
                                                Confirm
                                            </button>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBooking;
