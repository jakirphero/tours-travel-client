import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";
import Testimonial from "../Testimonial/Testimonial";
import TravelPoint from "../TravelPoint/TravelPoint";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Tour & Travel || Home</title>
            </Helmet>
            <Banner></Banner>
            <TravelPoint></TravelPoint>
            <Destination></Destination>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;