
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created success!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(error => {
                console.log(error.messages)
            })
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="card bg-base-100 flex justify-center shrink-0 max-w-sm mx-auto shadow-2xl mt-5">
                <h2 className="text-3xl text-center">Please SignUp?</h2>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                        {errors.name && <span className="text-red-400">This name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-400">This email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password:</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p className="text-red-400">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-400">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-400">Password max 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-400">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className="text-center">Already have an Account please? <Link className="text-green-500" to="/singIn">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
