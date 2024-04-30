import { Link } from "react-router-dom";


const Tours = ({spot}) => {

return (
        <Link to={`/spot-details/${spot._id}`}> 
            <div className="card w-80 border">
  <figure><img className="h-52 w-full " src={spot.image || "https://i.ibb.co/qNM97pQ/people-flag-with-celebration-bangladesh-independence-day-835895-3708.jpg"} alt="spot img" /></figure>
  <div className=" px-5 py-8">
    <h2 className="card-title font-bold text-3xl mb-2">{spot.tourists_spot_name || "Not Found"}</h2>
    <h3 className="font-bold text-start text-xl"><span className="text-[#E8614D]">${spot.average_cost || "Not Found"}</span>/ Per Person</h3>
    <div className="card-actions justify-center px-5 rounded-xl py-2 bg-[#FAF5EE] mt-5">
    {spot.travel_time || "Not Found"} days | {spot.country_Name || "Not Found"}
    </div>
  </div>
</div>
        </Link>
    );
};

export default Tours;