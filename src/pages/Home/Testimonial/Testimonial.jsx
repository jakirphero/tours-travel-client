import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';


const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTestimonials(data)
            })
    }, [])
    return (
        <>
            <SectionTitle heading={'what the say about us'} subHeading={'testimonial'}></SectionTitle>
            <div className="max-w-screen-xl mx-auto my-10">
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
                    {
                        testimonials.map((item, index) => <SwiperSlide key={index}>
                            <div className="max-w-sm mx-auto rounded-xl shadow-md overflow-hidden border-2">
                                <div className="flex items-center p-4">
                                    <img src={item.img} alt={item.title} className="w-10 h-10 rounded-full" />
                                    <h3 className="ml-4 font-bold text-xl">{item.title}</h3>
                                </div>
                                <div className="p-4">
                                    <p className="capitalize">{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </>
    );
};

export default Testimonial;