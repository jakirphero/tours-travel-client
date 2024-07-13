
import { Link } from 'react-router-dom';
import useCart from '../../hook/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Cart = () => {
    const [booking, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = booking.reduce((total, item) => total + item.price, 0);
    const { user } = useContext(AuthContext)

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/bookings/${id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your booking has been deleted.",
                        icon: "success",
                    });
                }
            }
        });
    }
    return (
        <div className="mt-10 max-w-screen-xl mx-auto px-4">
            <div className="flex justify-between mb-3">
                <div>
                    <h2 className="text-3xl font-bold">Booking Items: <span className='text-4xl text-green-600 font-bold'>{booking.length}</span></h2>
                    <h3 className="text-2xl">Total Price: <span className="text-3xl font-bold text-green-600">${totalPrice}</span></h3>
                </div>
                <div>
                    <p className="text-2xl font-bold py-1">{user.email}</p>
                    <Link to={'/'}>
                        <button className="btn btn-outline btn-sm mr-2">Go to Home</button>
                    </Link>
                    {
                        booking.length ? <Link to={'/dashboard/payment'}>
                            <button className="btn btn-info btn-sm">Confirm</button>
                        </Link> :
                            <button disabled className="btn btn-info btn-sm">Confirm</button>
                    }
                </div>
            </div>
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
                        {booking.map((item, index) => (
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
export default Cart;