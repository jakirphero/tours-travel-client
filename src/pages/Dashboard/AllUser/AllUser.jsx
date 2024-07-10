import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    });

    const makeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    };

    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold my-4">All User: {users.length}</h2>
            </div>
            <div>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-center">#</th>
                            <th className="py-3 px-6 text-center">ID</th>
                            <th className="py-3 px-6 text-center">Name</th>
                            <th className="py-3 px-6 text-center">Email</th>
                            <th className="py-3 px-6 text-center">Action</th>
                            <th className="py-3 px-6 text-center">Role</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {
                            users.map((user, index) => (
                                <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-center whitespace-nowrap">{index + 1}</td>
                                    <td className="py-3 px-6 text-center">{user._id}</td>
                                    <td className="py-3 px-6 text-center">{user.name}</td>
                                    <td className="py-3 px-6 text-center text-green-600">{user.email}</td>
                                    <td className="py-3 px-6 text-center">
                                        <button onClick={() => handleDelete(user)} className="btn btn-outline btn-xs">Delete</button>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        {
                                            user.role === 'admin' ? 'Admin' : <button className="btn btn-outline btn-sm"
                                                onClick={() => makeAdmin(user)}
                                            >
                                                <FaUser />
                                            </button>
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;