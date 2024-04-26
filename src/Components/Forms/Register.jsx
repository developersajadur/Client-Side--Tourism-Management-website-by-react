import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import {  ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser, googleLogin, updateUserProfile, twitterLogin, facebookLogin } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    Navigate(location?.state || "/");
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    const handleGoogleLogin = () => {
        handleSocialLogin(googleLogin);
    };

    const handleFacebookLogin = () => {
        handleSocialLogin(facebookLogin);
    };

    const handleTwitterLogin = () => {
        handleSocialLogin(twitterLogin);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {  
        // create user
        createUser(data.email, data.password )
        .then((result) => {
            // update user
            updateUserProfile( data.image , data.name)
            .then ( () => {
                toast.success('Login successful');
                if (result.user) {
                    Navigate(location?.state || "/");
                }
 
            })

        })
        .catch(error => {
            toast.error(error.message);
        });
    };

    return (
        <div className="w-full h-full flex flex-col justify-center pt-10 lg:pt-20 items-center">
            <Helmet>
                <title>
                    Join With Us
                </title>
            </Helmet>
            <div className="px-8 py-12 rounded-3xl bg-[#F5F5F5] lg:w-[50%]">
                <h1 className="text-4xl font-bold text-center">Create an Account!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">
                    <input {...register("name", { required: true })} name="name" type="text" placeholder="Your Full Name" className="input input-bordered w-full" />
                    {errors.Name && <span className="text-sm text-red-500 font-medium -mt-4">Please Write Your Name</span>}
                    <input {...register("email", { required: true })} name="email" type="email" placeholder="Your Email" className="input input-bordered w-full" />
                    {errors.email && <span className="text-sm text-red-500 font-medium -mt-4">Please Write Your Email</span>}
                    <input {...register("image")} name="image" type="text" placeholder="Your Photo URL" className="input input-bordered w-full" />

                    <label className="input input-bordered flex items-center gap-2">
                        <input  {...register("password", { required: true })} name="password"
                         type={showPassword ? "text" : "password"}
                         placeholder="Your Password" className="grow" />
                         <span onClick={ () => setShowPassword(!showPassword)} className="cursor-pointer">
                            {
                                showPassword ?  <FaRegEyeSlash  className=" text-2xl" /> : <FaRegEye className=" text-2xl" />
                            }
                         </span>
                    </label>

                    {errors.password && <span className="text-sm text-red-500 font-medium -mt-4">Please Write Your Password</span>}
                    <button className="btn w-full bg-[#E7A500]">Sign Up</button>
                </form>
                <div className="mt-5 flex justify-center items-center">
                    <h5 className="text-lg font-bold">Already have an account? <Link className="text-[#E7A500]" to="/login">Sign In</Link></h5>
                </div>
                <div className="divider">Register With</div>
                <div className="flex gap-5 justify-center pt-4">
                    <button onClick={handleGoogleLogin}><img className="h-9 w-9 rounded-full" src="./google-icon.png" alt="google" /></button>
                    <button onClick={handleFacebookLogin}><img className="h-9 w-9 rounded-full" src="./facebook-icon.png" alt="facebook" /></button>
                    <button onClick={handleTwitterLogin}><img className="h-9 w-9 rounded-full" src="./twitter-icon.png" alt="facebook" /></button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;
