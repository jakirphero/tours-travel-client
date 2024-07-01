import img2 from "../../../assets/The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
import img1 from "../../../assets/2021-09-06.jpg"
const TravelPoint = () => {
    return (
        <div className="hero py-10">
            <div className="hero-content flex flex-col lg:flex-row max-w-screen-xl mx-auto items-center lg:items-start">
                <div className="md:w-1/2 flex justify-center relative mb-8 lg:mb-0">
                    <div className="relative">
                        <img
                            src={img1}
                            className="h-full w-full rounded-lg shadow-2xl object-cover" />
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <img src={img2} alt="img" className="w-1/2 rounded-lg shadow-2xl border-2 object-cover" />
                    </div>
                </div>
                <div className="md:w-1/2 text-center lg:text-left sm:mt-16 lg:mt-0">
                    <h3 className="text-xl text-green-700">Travels Point</h3>
                    <h1 className="text-3xl font-bold">We help to find your dream place</h1>
                    <p className="py-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugit architecto, odit eaque distinctio mollitia numquam atque. Quisquam corrupti magnam molestias officia id voluptate pariatur harum nulla accusantium, cumque consequatur incidunt neque. Nemo impedit deleniti ducimus explicabo quam. Qui ipsam, provident voluptatibus ab quasi esse earum quis beatae minus reiciendis.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <h2 className="text-2xl text-green-700">100+</h2>
                            <p>Holiday Package</p>
                        </div>
                        <div>
                            <h2 className="text-2xl text-green-700">170</h2>
                            <p>Hotel</p>
                        </div>
                        <div>
                            <h2 className="text-2xl text-green-700">68</h2>
                            <p>Elite Transportation</p>
                        </div>
                        <div>
                            <h2 className="text-2xl text-green-700">10M+</h2>
                            <p>We help your dream place</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default TravelPoint;