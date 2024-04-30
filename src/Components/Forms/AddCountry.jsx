
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const AddCountry = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (newCountry) => {
        console.log(newCountry);
        fetch("https://server-side-nine-theta.vercel.app/countrys"  , {
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(newCountry)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                toast.success('Country Add successfully');
            }
        })
    }
    return (
        <div className="h-full w-full flex flex-col justify-center items-center px-2 lg:px-10 py-20"  style={{backgroundImage: 'url(https://i.postimg.cc/fyGBNjF8/11.png)'}}>
              <Helmet>
                <title>
                    Add Country
                </title>
            </Helmet>
        <div className="h-full w-full flex rounded-2xl flex-col justify-center items-center py-10 bg-[#F4F3F0]">
           <div className=" flex flex-col justify-center text-center gap-2 mb-5">
           <h1 className="text-3xl font-bold">Add New Tourism spots</h1>
            <p className="text-center">Explore breathtaking destinations! Discover our curated selection of diverse tourism spots. <br /> From scenic landscapes to cultural landmarks, plan your next adventure with ease.</p>
           </div>
           <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full px-5 lg:px-28">
        <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Country</h6>
                <select  {...register("country_Name")} name="country_Name" className="select w-full">
                    <option disabled selected>Pick your favorite Country</option>
                    <option>Bangladesh</option>
                    <option>Thailand</option>
                    <option>Indonesia</option>
                    <option>Malaysia</option>
                    <option>Vietnam</option>
                    <option>Cambodia</option>
                    </select>
            </div>
            <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Image URL</h6>
            <input {...register("image")} name="image"  type="text"  placeholder="Enter Image URL" className="input w-full" />
            </div>
            <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Details</h6>
                <textarea {...register("details")} name="details"  type="text"  placeholder="Enter Details" className="textarea h-24 w-full"></textarea>
            </div>
            <button className="btn bg-[#D2B48C]">Add Country</button>
        </form>
        </div>
        </div>
    );
};

export default AddCountry;