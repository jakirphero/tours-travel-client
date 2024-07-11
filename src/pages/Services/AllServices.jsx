import Cover from "../../shard/Cover/Cover";
import img from "../../assets/Taj-Mahal-at-sunset-in-India-stock-photo-1400.jpg";
import useServices from "../../hook/useServices";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ServiceTab from "./ServiceTab";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AllServices = () => {
    const categories = ['Hiking', 'Staking', 'Climbing', 'Tours', 'Driving', 'Flying', 'Best Price', 'Destination', 'City Tour', 'Hotel'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
    const navigate = useNavigate();

    const [services, error] = useServices();

    const servicesByCategory = categories.reduce((acc, cat) => {
        acc[cat] = services.filter(service => service.category === cat);
        return acc;
    }, {});

    useEffect(() => {
        if (category && categories.includes(category)) {
            setTabIndex(categories.indexOf(category));
        }
    }, [category]);

    const handleTabSelect = (index) => {
        setTabIndex(index);
        navigate(`/allServices/${categories[index]}`);
    };

    return (
        <>
            <Cover img={img} title={'all services'}></Cover>
            <div className="max-w-screen-xl mx-auto">
                {error ? (
                    <div className="text-red-500">{error}</div>
                ) : (
                    <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
                        <TabList>
                            {categories.map((cat) => (
                                <Tab key={cat}>{cat}</Tab>
                            ))}
                        </TabList>

                        {categories.map((cat) => (
                            <TabPanel key={cat}>
                                <ServiceTab items={servicesByCategory[cat]} />
                            </TabPanel>
                        ))}
                    </Tabs>
                )}
            </div>
        </>
    );
};

export default AllServices;
