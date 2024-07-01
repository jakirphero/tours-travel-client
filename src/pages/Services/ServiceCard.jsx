import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {category, title, description} = service;
    return (
        <div className="card bg-base-100 w-80 shadow-sm border-2">
            <div className="card-body">
            <h2 className="card-title">{category}</h2>
                <h3 className="text-xl">{title}</h3>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link><button className="btn btn-outline">Booking Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;