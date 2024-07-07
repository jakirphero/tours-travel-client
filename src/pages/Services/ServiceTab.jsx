import ServiceTabCard from "./ServiceTabCard";

const ServiceTab = ({ items }) => {
    
    return (
        <div className="max-w-screen-xl mx-auto grid gap-4 justify-center justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4">
            {items.map(item => (
                <ServiceTabCard key={item._id} item={item} />
            ))}
        </div>
    );
};

export default ServiceTab;
