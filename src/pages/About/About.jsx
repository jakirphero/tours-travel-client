import Cover from "../../shard/Cover/Cover";
import img from "../../assets/download (2).jfif"
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import { FaBook, FaCheck, FaHeadphones, } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
const About = () => {
    return (
        <div>
            <Cover img={img} title={'about us'}></Cover>
            <SectionTitle heading={'this popular destination have a let to offer'} subHeading={'why chose us?'}></SectionTitle>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    <FaCheck className="text-4xl mb-2 text-green-600" />
                    <h3 className="text-xl mb-2">Best Price Guarantee</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium reprehenderit distinctio perferendis a sunt minima vitae incidunt laboriosam consequuntur.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <FaBook className="text-4xl mb-2 text-green-600" />
                    <h3 className="text-xl mb-2">Easy Booking</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium reprehenderit distinctio perferendis a sunt minima vitae incidunt laboriosam consequuntur.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <FaHeadphones className="text-4xl mb-2 text-green-600" />
                    <h3 className="text-xl mb-2">Customer Service 24h</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium reprehenderit distinctio perferendis a sunt minima vitae incidunt laboriosam consequuntur.</p>
                </div>
            </div>
            <div className="hero my-6">
                <div className="hero-content flex-col lg:flex-row-reverse p-4">
                    <div className="md:w-1/3">
                        <img
                            src="https://i.ibb.co/Vg2Wx39/download-2.jpg"
                            className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="md:w-2/3">
                        <h1 className="text-3xl font-bold">About ToursTravel.com</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <h3 className="text-2xl">Our Teams</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="my-3">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        centeredSlides={true}
                        speed={100}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card card-compact bg-base-100 w-96 h-48 shadow-xl">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/PhCPXbM/ff.jpg"
                                        alt="img" className="h-20"/>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card card-compact bg-base-100 w-96 h-48 shadow-xl">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/fd8TspB/1706175623pro-vc-aca.jpg"
                                        alt="img" className="h-20" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card card-compact bg-base-100 w-96 h-48 shadow-xl">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/nCykYkL/Momtaj.jpg"
                                        alt="img" className="h-20"/>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default About;