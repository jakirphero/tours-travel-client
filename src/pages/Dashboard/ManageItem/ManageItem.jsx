import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useServices from "../../../hook/useServices";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const ManageItem = () => {
    const [services, loading, refetch] = useServices();
    const axiosSecure = useAxiosSecure();
    const [searchQuery, setSearchQuery] = useState("");

    const handleDelete = async (item) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                const res = await axiosSecure.delete(`/services/${item._id}`);
                console.log(res);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Deleted successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong catch!",
                });
                console.error("Error deleting item:", error);
            }
        }
    };

    const filteredServices = services.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-4 ">
                    <h2 className="text-3xl font-bold my-4">All Item: {filteredServices.length}</h2>
                    <div className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow px-4 py-2"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FaSearch />
                    </div>
                </div>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-spinner loading-xs"></span>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">#</th>
                                <th className="py-3 px-6 text-left">Image</th>
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Details</th>
                                <th className="py-3 px-6 text-center">Price</th>
                                <th className="py-3 px-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {filteredServices.map((item, index) => (
                                <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="w-10 h-10 md:w-12 md:h-12">
                                            <img
                                                className="w-full h-full rounded-full"
                                                src={item.image}
                                                alt={item.title}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-3 px-6">{item.title}</td>
                                    <td className="py-3 px-6">{item.description}</td>
                                    <td className="py-3 px-6 text-center text-green-600">${item.price}</td>
                                    <td className="py-3 px-6 text-center">
                                        <button onClick={() => handleDelete(item)} className="btn btn-primary btn-xs">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageItem;
