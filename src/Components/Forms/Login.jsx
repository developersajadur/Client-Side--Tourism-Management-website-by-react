import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import {Link,  useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { signInUser, googleLogin, facebookLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    toast.success('Login successful');
                    navigate(location?.state || "/");
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

    // const handleTwitterLogin = () => {
    //     handleSocialLogin(twitterLogin);
    // };

    const onSubmit = (data) => {
        signInUser(data.email, data.password)
            .then((result) => {
                if (result.user) {
                    toast.success('Login successful');
                    navigate(location?.state || "/");
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    };
    
    

    return (
        <div className="w-full h-full flex flex-col justify-center pt-10 lg:pt-20 items-center">
            <Helmet>
                <title>
                    Welcome Back Login Please
                </title>
            </Helmet>
            <div className="px-8 py-12 rounded-3xl bg-[#F5F5F5] lg:w-[50%]">
                <h1 className="text-4xl font-bold text-center">Sign In to Your Account!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">
                    <input {...register("email", { required: true })} name="email" type="email" placeholder="Your Email" className="input input-bordered w-full" />
                    {errors.email && <span className="text-sm text-red-500 font-medium -mt-4">Please write your email</span>}
                    <label className="input input-bordered flex items-center gap-2">
                        <input  {...register("password", { required: true })} name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Your Password" className="grow" />
                        <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                            {showPassword ? <FaRegEyeSlash className="text-2xl" /> : <FaRegEye className="text-2xl" />}
                        </span>
                    </label>
                    {errors.password && <span className="text-sm  text-red-500 font-medium -mt-4">Please write your password</span>}
                    <div className="flex justify-between items-center">
                        <div className="form-control">
                            <label className="label cursor-pointer gap-2">
                                <input type="checkbox" className="cursor-pointer w-4 h-4" />
                                <span className="label-text">Remember me</span>
                            </label>
                        </div>
                        <Link to="#">Forgot My Password?</Link>
                    </div>
                    <button className="btn w-full bg-[#E7A500]">Sign In</button>
                </form>
                <div className="mt-5 flex justify-center">
                    <h5 className="text-lg font-bold">Not a Member? <Link className="text-[#E7A500]" to="/register">Sign Up</Link></h5>
                </div>
                <div className="divider">Login With</div>
                <div className="flex gap-5 justify-center pt-4">
                    <button onClick={handleGoogleLogin}><img className="h-9 w-9 rounded-full" src="/public/image/google-icon.png" alt="google" /></button>
                    <button onClick={handleFacebookLogin}><img className="h-9 w-9 rounded-full" src="/public/image/facebook-icon.png" alt="facebook" /></button>
                    {/* <button onClick={handleTwitterLogin}><img className="h-9 w-9 rounded-full" src="./twitter-icon.png" alt="twitter" /></button> */}
                </div>
            </div>
        </div>
    );
};

export default Login;
