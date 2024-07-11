import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const NewTours = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        //img upload to imgbb and get img url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data)
        if (res.data.success) {
            //now send the new tours to the database
            const toursPlace = {
                title: data.title,
                price: parseFloat(data.price),
                category: data.category,
                description: data.description,
                comment: data.comment,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/services', toursPlace)
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is added to the services.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (
        <div>
            <h2 className="text-center text-2xl font-bold">Add Tours</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-2">
                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-xl">Title*</span>
                        </div>
                        <input type="text" placeholder="Title" {...register('title', { required: true })} className="input input-bordered w-full text-xl" />
                    </div>
                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-xl">Price*</span>
                        </div>
                        <input type="number" placeholder="price" {...register('price', { required: true })} className="input input-bordered w-full text-xl" />
                    </div>
                </div>
                <div className="flex gap-2 my-4">
                    {/* category */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl">Category*</span>
                        </label>
                        <select defaultValue="default" {...register('category', { required: true })}
                            className="select select-bordered w-full text-xl">
                            <option disabled value="default">Select a category</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Staking">Staking</option>
                            <option value="Climbing">Climbing</option>
                            <option value="Tours">Tours</option>
                            <option value="Driving">Driving</option>
                            <option value="Flying">Flying</option>
                            <option value="Best Price">Best Price</option>
                            <option value="Destination">Destination</option>
                            <option value="City Tour">City Tour</option>
                            <option value="Hotel">Hotel</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-xl">Optional</span>
                        </div>
                        <input type="text" placeholder="Comment" {...register('comment', { required: true })} className="input input-bordered w-full text-xl" />
                    </div>
                </div>
                <div className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-xl">Description*</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24 text-xl" placeholder="Details" {...register('description', { required: true })}></textarea>
                </div>
                <div className="mt-4">
                    <input type="file" className="file-input w-full max-w-xs" {...register('image', { required: true })} />
                </div>
                <input type="submit" className="btn btn-outline mt-4 text-xl" value="Add New" />
            </form>
        </div>
    );
};

export default NewTours;