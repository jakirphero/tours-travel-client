import { Link } from "react-router-dom";

const ServiceTabCard = ({ item }) => {
    const { title, description, image, price } = item;
    console.log('ServiceTabCard item:', item);
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
                    <Link><button className="btn btn-outline btn-accent">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceTabCard;
