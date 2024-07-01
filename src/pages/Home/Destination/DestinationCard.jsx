
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
const DestinationCard = ({ item }) => {

    const { description, day, img, title, price } = item;

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    className="w-full"
                    src={img}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={'/discover'}>
                        <button className="flex items-center">
                            <FaLocationArrow />
                            <span className="mx-2">{day}</span>
                            <small>day for tips</small>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;