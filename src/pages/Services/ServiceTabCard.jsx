import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ServiceTabCard = ({ item }) => {
    const { title, description, image, price } = item;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleBooking = () => {
        if (user) {
            // TODO: send data to database and store
            console.log('booking data')
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
