import { Link } from "react-router-dom";


const Tours = ({spot}) => {

return (
        <Link to={`/spot-details/${spot._id}`}>
            <div className="card w-80 border">
  <figure><img className="h-52 " src={spot.image} alt="spot img" /></figure>
  <div className=" px-5 py-8">
    <h2 className="card-title font-bold text-3xl mb-2">{spot.tourists_spot_name}</h2>
    <h3 className="font-bold text-start text-xl"><span className="text-[#E8614D]">${spot.average_cost}</span>/ Per Person</h3>
    <div className="card-actions justify-center px-5 rounded-xl py-2 bg-[#FAF5EE] mt-5">
    {spot.travel_time} days | {spot.country_Name}
    </div>
  </div>
</div>
        </Link>
    );
};

export default Tours;