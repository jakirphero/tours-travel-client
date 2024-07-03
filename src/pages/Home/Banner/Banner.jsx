import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/paris.jpg';
import img2 from '../../../assets/2021-09-06.jpg';
import img3 from '../../../assets/licensed-image.jpg';
import img4 from '../../../assets/The_Great_Wall_of_China_at_Jinshanling-edit.jpg';

const Banner = () => {
    const images = [img1, img2, img3, img4];
    const handleSubmit = event => {
        event.preventDefault();
        console.log('hello');
    };
    return (
        <div className="relative">
            <Swiper
                className="mySwiper h-screen"
                speed={100}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img className="w-full h-full object-cover" src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute z-10 bottom-0 left-0 right-0 max-w-screen-xl mx-auto bg-white shadow-xl rounded-lg border-b-2">
                <div className='flex ml-2 py-2'>
                    <button className='btn btn-outline'>One Way</button>
                    <button className='btn btn-outline'>Round Trip</button>
                    <button className='btn btn-outline'>Multi Trip</button>
                </div>
                <form onSubmit={handleSubmit} className='p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4'>
                    <div className="w-full md:w-auto">
                        <input type="text" placeholder="From" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="w-full md:w-auto">
                        <input type="text" placeholder="To" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="w-full md:w-auto">
                        <input type="date" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input type="submit" className="bg-blue-500 text-white p-2 rounded w-auto" value="Search" />
                </form>
            </div>
        </div>
    );
};

export default Banner;
