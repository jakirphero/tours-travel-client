import { useContext } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ServiceTabCard = ({ item }) => {
    const { title, description, image, price, _id } = item;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleBooking = async () => {
        if (user && user.email) {
            // TODO: send data to database and store
            try {
                const res = await fetch('https://tours-travel-server.vercel.app/bookings', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        itemId: _id,
                        email : user.email,
                        title,
                        price,
                        image,
                        description
                    })
                });
                console.log(res)
                if (res.ok) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} your booking success`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    .then(()=>{
                        navigate('/cart')
                    })
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
            navigate('/singIn')
        }
    }
    return (
        <div className="card bg-base-100 image-full w-80 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={'img'} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className="text-2xl font-bold text-yellow-200">${price}</p>
                <div className="card-actions justify-end">
                    <Link><button onClick={handleBooking} className="btn btn-outline btn-accent">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceTabCard;
