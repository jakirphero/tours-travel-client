import Cover from "../../shard/Cover/Cover";
import img from "../../assets/Taj-Mahal-at-sunset-in-India-stock-photo-1400.jpg"
import { Helmet } from "react-helmet-async";
const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Tours & Travel || Contact-Us</title>
            </Helmet>
            <Cover img={img} title={'contact us'}></Cover>
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center">
                    <h2 className="text-2xl">Get in Touch</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio magnam quis cum voluptatum iure quas itaque consectetur nulla. Quam velit quae placeat! Nemo quos eveniet impedit nisi suscipit quam? Aut quaerat deserunt numquam, corrupti atque dolorem! Harum quo, aliquid qui nobis maxime perferendis, dolorem ad, nulla quas mollitia iure natus.</p>
                </div>
                <div className="">
                    <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                        <div className="text-center lg:text-left md:w-1/2">
                            <h1 className="text-5xl font-bold">Contact Now</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-24" placeholder="Send Message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;