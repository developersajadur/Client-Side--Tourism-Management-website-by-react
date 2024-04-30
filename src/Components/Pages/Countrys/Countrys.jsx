import { useLoaderData } from "react-router-dom";
import Country from "./Country";



const Countrys = () => {
    const countrys = useLoaderData()
    return (
        <div className="px-2 lg:px-10">
              <div className="w-full text-center py-5 rounded-xl bg-[#1313130D] mt-10 mb-10">
            <h1 className="text-4xl font-bold">Our Recommended country</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                countrys.map(country => 
                    <Country
                    key={country._id}
                    country={country}
                    ></Country>
                )
            }
        </div>
            
        </div>
    );
};

export default Countrys;