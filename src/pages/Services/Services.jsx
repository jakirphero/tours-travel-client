import Cover from "../../shard/Cover/Cover";
import img1 from "../../assets/The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
import img2 from "../../assets/Taj-Mahal-at-sunset-in-India-stock-photo-1400.jpg"
import { FaBaby, FaCity, FaHome, FaLocationArrow, FaMap, FaMoneyBill, FaWater } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";
import useServices from "../../hook/useServices";
import { Helmet } from "react-helmet-async";
const Services = () => {
    const [services] = useServices();
    const getUniqueServices = (services) => {
        const uniqueServices = [];
        const categories = new Set();

        services.forEach(service => {
            if (!categories.has(service.category)) {
                categories.add(service.category);
                uniqueServices.push(service);
            }
        });

        return uniqueServices;
    };

    const uniqueServices = getUniqueServices(services);
    return (
        <>
            <Helmet>
                <title>Tours & Travel || Service</title>
            </Helmet>
            <Cover img={img1} title={'services'}></Cover>

            <div className="max-w-screen-xl mx-auto grid gap-4 justify-center justify-items-center my-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card bg-base-100 w-80 shadow-xl">
                    <div className="card-body">
                        <FaMoneyBill className="text-3xl font-bold"></FaMoneyBill>
                        <h2 className="card-title">Best price</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <Link><button className="btn btn-primary">All</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-80 shadow-xl">
                    <div className="card-body">
                        <FaLocationArrow className="text-3xl font-bold"></FaLocationArrow>
                        <h2 className="card-title">All Destinations</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <Link><button className="btn btn-primary">All</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-80 shadow-xl">
                    <div className="card-body">
                        <FaCity className="text-3xl font-bold"></FaCity>
                        <h2 className="card-title">City Tours</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <Link><button className="btn btn-primary">All</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-80 shadow-xl">
                    <div className="card-body">
                        <FaHome className="text-3xl font-bold"></FaHome>
                        <h2 className="card-title">Hotels</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <Link><button className="btn btn-primary">All</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Cover img={img2} title={'facilities'}></Cover>
            <div role="tablist" className="tabs tabs-boxed mb-6">
                <Link role="tab" className="tab btn btn-outline"><FaBaby className="text-2xl font-bold"></FaBaby>  Baby</Link>
                <Link role="tab" className="tab btn btn-outline"><FaWater className="text-2xl font-bold"></FaWater>  Drinks</Link>
                <Link role="tab" className="tab btn btn-outline"><FaHome className="text-2xl font-bold"></FaHome>  Camps</Link>
                <Link role="tab" className="tab btn btn-outline"><FaMap className="text-2xl font-bold"></FaMap>  Camps</Link>
            </div>
            <SectionTitle heading={'our services'} subHeading={'benefits'}></SectionTitle>
            <div className="max-w-screen-xl mx-auto grid gap-4 justify-center justify-items-center my-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    uniqueServices.map((service, index) => <ServiceCard
                        key={index}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </>
    );
};

export default Services;