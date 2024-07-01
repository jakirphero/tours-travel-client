
import Cover from "../../shard/Cover/Cover";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { Link } from "react-router-dom";
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import img from "../../assets/Taj-Mahal-at-sunset-in-India-stock-photo-1400.jpg"
import img2 from "../../assets/2021-09-06.jpg"
import img3 from "../../assets/licensed-image.jpg"
import img4 from "../../assets/The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
import { useEffect, useState } from "react";

const Discover = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        fetch('destination.json')
            .then(res => res.json())
            .then(data => {
                setDestinations(data);
            })
    }, [])
    return (
        <div>
            <Cover img={img} title={'discover'}></Cover>
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center my-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit atque, totam ipsum ad asperiores aliquid, ullam dolores culpa tempora voluptas temporibus iste? Harum, nemo. Tempora maxime, commodi rem delectus fugiat facilis voluptatibus itaque nam placeat numquam facere officiis expedita deserunt praesentium dolore nemo amet, quidem nihil maiores eius. Laboriosam, rerum!</p>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="md:w-2/3 ml-2">
                        <LightGallery
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                        >
                            <div className="mt-3">
                                <Link>
                                    <img src={img2} alt="img" className="h-[300px] w-full"/>
                                </Link>
                                <h3 className="text-2xl capitalize my-4">Memorable festivals on Bali beach</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, provident minima voluptates pariatur ipsa libero dolores eum repellendus soluta beatae.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus delectus aliquam sequi repellendus! Dignissimos nisi culpa libero illo nulla, ducimus voluptatibus nemo voluptatem, distinctio sint doloremque quae dolor vero? Ipsa suscipit dolorem dolor voluptas reiciendis numquam autem voluptatibus saepe iste.</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <div>
                                    <Link to={img3}>
                                        <img src={img3} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to={img4}>
                                        <img src={img4} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <p className="my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam vitae nesciunt veniam minima assumenda culpa dolore praesentium magnam corrupti velit. Vitae porro architecto sit eaque culpa ducimus assumenda harum, tempore error earum corporis eos natus itaque molestias ex accusantium cumque doloribus exercitationem reprehenderit laborum autem. Voluptas veniam cupiditate quis culpa?</p>
                        </LightGallery>
                    </div>
                    <div className="md:w-1/3">
                        {
                            destinations.map((item, index) => <div key={index} className="card bg-base-100 image-full shadow-xl mt-3">
                                <figure>
                                    <img
                                        src={item.img}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p>{item.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={'/services'}><button className="btn btn-primary">Show More</button></Link>  
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
