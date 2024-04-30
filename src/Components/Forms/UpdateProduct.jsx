import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
const UpdateProduct = () => {
    const { register, handleSubmit } = useForm();
    const spot = useLoaderData();
    const onSubmit = (updateSpot) => {
        fetch(`https://server-side-nine-theta.vercel.app/spots/${spot._id}` , {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateSpot)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success('Spot updated successfully');
            }
        })
    }
    return (
        <div className="h-full w-full flex flex-col justify-center items-center px-2 lg:px-10 py-20"  style={{backgroundImage: 'url(https://i.postimg.cc/fyGBNjF8/11.png)'}}>
              <Helmet>
                <title>
                 update Your Profile
                </title>
            </Helmet>
        <div className="h-full w-full rounded-2xl flex flex-col justify-center items-center py-10 bg-[#F4F3F0]">
           <div className=" flex flex-col justify-center text-center gap-2 mb-5">
           <h1 className="text-3xl font-bold">Update Tourism spots</h1>
            <p className="text-center">Explore diverse destinations with breathtaking landscapes and cultural landmarks. Plan your next adventure <br /> with ease and discover the beauty of tourism spots worldwide</p>
           </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full px-5 lg:px-28">

            {/* form colum 1 */}
        <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Your Name</h6>
            <input {...register("user_name")} name="user_name" defaultValue={spot.user_name}  type="text" placeholder="Enter Tourists Spot Name" className="input w-full" />
            </div>
            <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Tourists Spot Name</h6>
            <input {...register("tourists_spot_name")} name="tourists_spot_name" defaultValue={spot.tourists_spot_name}  type="text" placeholder="Enter Tourists Spot Name" className="input w-full" />
            </div>
        </div>

         {/* form colum 2 */}

        <div className="flex flex-col lg:flex-row gap-5">

        <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Country</h6>
                <select  {...register("country_Name")} name="country_Name" defaultValue={spot.country_Name} className="select w-full">
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
                <h6 className="">Location</h6>
            <input {...register("location")} name="location" defaultValue={spot.location}  type="text" placeholder="Enter Tourists Spot Location" className="input w-full" />
            </div>
        </div>

         {/* form colum 3 */}

        <div className="flex flex-col lg:flex-row gap-5">

        <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Average Cost</h6>
            <input {...register("average_cost")} name="average_cost" defaultValue={spot.average_cost}  type="number" min={0} placeholder="Enter Average Cost" className="input w-full" />
            </div>

            <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Seasonality</h6>
                <select  {...register("seasonality")} name="seasonality" defaultValue={spot.seasonality} className="select w-full">
                    <option disabled selected>Pick your favorite Seasonality</option>
                    <option>Summer</option>
                    <option>Winter</option>
                    </select>
            </div>
        </div>
         {/* form colum 4 */}

         <div className="flex flex-col lg:flex-row gap-5">
         <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Travel Time</h6>
            <input {...register("travel_time")} name="travel_time" defaultValue={spot.travel_time}  type="number" min={1} placeholder="Enter Travel Time" className="input w-full" />
            </div>
            <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Total Visitors Per Year</h6>
            <input {...register("totalVisitorsPerYear")} name="totalVisitorsPerYear" defaultValue={spot.totalVisitorsPerYear}  type="number" min={0} placeholder="Enter Total Visitors Per Year" className="input w-full" />
            </div>
        </div>

        {/* form details */}



        <div className="flex flex-col lg:flex-row gap-5">
         <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Image URL</h6>
            <input {...register("image")} name="image" defaultValue={spot.image}  type="text"  placeholder="Enter Image URL" className="input w-full" />
            </div>
            
        <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Details</h6>
                <input {...register("details")} name="details" defaultValue={spot.details}  type="text"  placeholder="Enter Details" className="input w-full" />
            </div>
        </div>
        <button className="btn bg-[#D2B48C]">Update Spot</button>
        </form>
        </div>
        </div>
    );
};

export default UpdateProduct;