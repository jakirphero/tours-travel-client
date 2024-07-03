import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import DestinationCard from "./DestinationCard";
import { useEffect, useState } from "react";

const Destination = () => {
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        fetch('destination.json')
        .then(res=> res.json())
        .then(data => {
            setPlace(data);
        })
    },[])
    return (
        <>
            <SectionTitle
                heading={'discover your love'}
                subHeading={'top destination'}
            ></SectionTitle>
            <div className="grid gap-4 py-4 max-w-screen-xl mx-auto md:grid-cols-3">
                {
                    place.map((item, index) => (
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