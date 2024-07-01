import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import DestinationCard from "./DestinationCard";

const Destination = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('destination.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPlaces(data)
            })
    }, [])

    return (
        <>
            <SectionTitle
                heading={'discover your love'}
                subHeading={'top destination'}
            ></SectionTitle>
            <div className="grid gap-4 py-4 max-w-screen-xl mx-auto md:grid-cols-3">
                {
                    places.map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <DestinationCard
                                item={item}
                            />
                        </div>
                    ))
                }
            </div >
        </>
    );
};

export default Destination;