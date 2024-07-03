import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { category, title, description, image } = service;
    return (
        <div className="card bg-base-100 image-full w-80 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <h4 className="font-bold">{title}</h4>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/allServices/${category}`}><button className="btn btn-outline btn-accent">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;