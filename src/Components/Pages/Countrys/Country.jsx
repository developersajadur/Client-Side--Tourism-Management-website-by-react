import { Link } from "react-router-dom";

const Country = ({country}) => {
    return (
        <div className="">
            <div className="card h-fit w-80 border">
  <figure><img className="h-52 w-full " src={country.image} alt="Country img" /></figure>
  <div className=" px-5 pt-5">
    <h2 className="card-title font-bold text-3xl mb-2">{country.country_Name}</h2>
    <p className="">{country.details}</p>
  </div>
  <div className="px-5 w-full py-8 flex justify-center">
  <Link to={`/countrys/${country.country_Name}`} className="btn w-full bg-[#D2B48C]">View Tourism Spots</Link>
  </div>
</div>
        </div>
    );
};

export default Country;