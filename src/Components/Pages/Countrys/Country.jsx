import { Link } from "react-router-dom";

const Country = ({country}) => {
    return (
        <div className="">
            <div className="card h-fit w-80 border">
  <figure><img className="h-52 w-full " src={country.image || "https://i.ibb.co/qNM97pQ/people-flag-with-celebration-bangladesh-independence-day-835895-3708.jpg"} alt="Country img" /></figure>
  <div className=" px-5 pt-5">
    <h2 className="card-title font-bold text-3xl mb-2">{country?.country_Name || "Not Found"}</h2>
    <p className="">{country.details || "Not Found"}</p>
  </div>
  <div className="px-5 w-full py-8 flex justify-center">
  <Link to={`/countrys/${country.country_Name || "Not Found"}`} className="btn w-full bg-[#D2B48C]">View Tourism Spots</Link>
  </div>
</div>
        </div>
    );
};

export default Country;