import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const TourDetails = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="px-2 lg:px-10 mt-20">
            <div className="flex gap-8">
                <div className=" flex flex-col gap-5 w-1/2">
                <img src="https://i.ibb.co/r0H7GkZ/grilled-fish-close-up-decorated-with-vegetables.jpg" alt="" className=" h-[60%] w-full" />
                <div className="flex w-full justify-between">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl font-bold">Golden Temple</h1>
                        <div className="flex gap-5 items-center">
                            <div className="font-bold text-xl flex gap-2 items-center">
                            <FaLocationDot /> <h5 className="">Bangladesh</h5>
                            </div>
                            <div className="font-bold text-xl flex gap-2 items-center">
                            <IoTime /> <h5 className="">Summer / Travel 2 days</h5>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    <h1 className="text-2xl font-bold">$1000/ 2 day</h1>
                    </div> 
                </div>
                <div className="">
                    <p className="">A stunning architectural marvel with golden domes and intricate designs.</p>
                </div>
                </div>



            {/* ----------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------- */}



                <div className="w-1/2">
                    <form onSubmit={handleSubmit}  className="flex flex-col gap-10">

                        <div className="flex flex-col gap-5">

                        {/* ------- row 1--------- */}
                        <div className="flex gap-5">
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">First Name</h6>
                                <input type="text" placeholder="Type Your First Name" className="input input-bordered w-full" />
                            </div>                      
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Journey Time</h6>
                                <input type="date" placeholder="Type Your First Name" className="input input-bordered w-full" />
                            </div>                      
                        </div>
                        {/* ------- row 2--------- */}
                        <div className="flex gap-5">
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Email Address</h6>
                                <input type="text" placeholder="Type Your Email Address" className="input input-bordered w-full" />
                            </div>                      
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Your Gender</h6>
                                <select className="select select-bordered w-full max-w-xs">
                             <option disabled selected>Pick Your Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                    </select>
                            </div>                      
                        </div>
                           {/* ------- row 3--------- */}
                           <div className="flex gap-5">
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Address</h6>
                                <input type="text" placeholder="Type Your Address" className="input input-bordered w-full" />
                            </div>                      
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Zip Code</h6>
                                <input type="number" min={1} placeholder="Type Your Zip Code" className="input input-bordered w-full" />
                            </div>                      
                        </div>
                        </div>

                        {/* -------------------------------------------------------- */}

                        <div className="flex flex-col gap-5">
                            <h1 className="text-3xl font-bold">Payment Details</h1>

                            <div className="flex gap-5">
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Card Holder Name</h6>
                                <input type="text" placeholder="Type Your Card Holder Name" className="input input-bordered w-full" />
                            </div>                      
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Date</h6>
                                <input type="date" min={1} placeholder="Type Your Zip Code" className="input input-bordered w-full" />
                            </div>                      
                        </div>


                        {/* ------------- row 5------------ */}

                        
                        <div className="flex gap-5">
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">Card Number</h6>
                                <input type="number" placeholder="Type Your Card Number" className="input input-bordered w-full" />
                            </div>                      
                            <div className="flex flex-col gap-2 w-full">
                                <h6 className="font-bold">CVV</h6>
                                <input type="number" min={1} placeholder="Type Your CVV Number" className="input input-bordered w-full" />
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