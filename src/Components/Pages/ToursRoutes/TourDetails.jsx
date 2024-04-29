import { useEffect, useState } from "react";
import { FaEye, FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { useParams } from "react-router-dom";

const TourDetails = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }

    const { id } = useParams()
    const [ spotDetails , setSpotDetails ] = useState();
    console.log(spotDetails);
    useEffect(() => {
        fetch(`http://localhost:4000/spotDetails/${id}`)
        .then(res => res.json())
        .then(data => setSpotDetails(data))
    },[id])


    

    return (
        <div className="px-2 lg:px-10 ">       
            <div className="w-full text-center py-5 rounded-xl bg-[#1313130D] mt-10 mb-10">
            <h1 className="text-4xl font-bold">You Are Almost Done !</h1>
        </div>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className=" flex flex-col gap-5 lg:w-1/2">
                <img src={spotDetails?.image} alt="" className=" h-[60%] w-full rounded-2xl" />
                <div className="flex flex-col gap-5 lg:flex-row w-full justify-between">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl font-bold">{spotDetails?.tourists_spot_name}</h1>
                        <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center">
                            <div className="font-bold text-xl flex gap-2 items-center">
                            <FaLocationDot /> <h5 className="">{spotDetails?.country_Name}</h5>
                            </div>
                            <div className="font-bold text-xl flex gap-2 items-center">
                            <IoTime /> <h5 className=""> {spotDetails?.seasonality} / Travel 2 days</h5>
                            </div>
                            <div className="font-bold text-xl flex gap-2 items-center">
                            <FaEye /> <h5 className=""> {spotDetails?.totalVisitorsPerYear}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    <h1 className="text-2xl font-bold">${spotDetails?.average_cost}</h1>
                    </div> 
                </div>
                <div className="">
                    <p className="">{spotDetails?.details}</p>
                </div>
                </div>



            {/* ----------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------- */}



                <div className="lg:w-1/2">
                    <form onSubmit={handleSubmit}  className="flex flex-col gap-10">

                        <div className="flex flex-col gap-5">

                        {/* ------- row 1--------- */}
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">First Name</h6>
                                <input required type="text" placeholder="Type Your First Name" className="input input-bordered w-full" />
                            </div>                      
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Journey Time</h6>
                                <input required type="date" placeholder="Type Your First Name" className="input input-bordered w-full" />
                            </div>                      
                        </div>
                        {/* ------- row 2--------- */}
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Email Address</h6>
                                <input required type="text" placeholder="Type Your Email Address" className="input input-bordered w-full" />
                            </div>                      
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Your Gender</h6>
                                <select required className="select select-bordered w-full">
                             <option disabled selected>Pick Your Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                    </select>
                            </div>                      
                        </div>
                           {/* ------- row 3--------- */}
                           <div className="flex flex-col lg:flex-row gap-5">
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Address</h6>
                                <input required type="text" placeholder="Type Your Address" className="input input-bordered w-full" />
                            </div>                      
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Zip Code</h6>
                                <input required type="number" min={0} placeholder="Type Your Zip Code" className="input input-bordered w-full" />
                            </div>                      
                        </div>
                        </div>

                        {/* -------------------------------------------------------- */}

                        <div className="flex flex-col gap-5">
                            <h1 className="text-3xl font-bold">Payment Details</h1>

                            <div className="flex flex-col lg:flex-row gap-5">
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Card Holder Name</h6>
                                <input required type="text" placeholder="Type Your Card Holder Name" className="input input-bordered w-full" />
                            </div>                      
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Date</h6>
                                <input required type="date" min={1} placeholder="Type Your Zip Code" className="input input-bordered w-full" />
                            </div>                      
                        </div>


                        {/* ------------- row 5------------ */}

                        
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Card Number</h6>
                                <input required type="number" min={0} placeholder="Type Your Card Number" className="input input-bordered w-full" />
                            </div>                      
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">CVV</h6>
                                <input required type="number" min={0} placeholder="Type Your CVV Number" className="input input-bordered w-full" />
                            </div>                      
                        </div>


                        </div>

                        <button className="btn bg-[#D2B48C] text-xl font-bold">Order Now</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;