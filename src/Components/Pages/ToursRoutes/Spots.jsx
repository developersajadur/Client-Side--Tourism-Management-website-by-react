import { useLoaderData } from "react-router-dom";
import Tours from "./Tours";

const Spots = () => {
    const Spots = useLoaderData()
    return (
        <div className="px-2 lg:px-10">
             <div className="w-full text-center py-5 rounded-xl bg-[#1313130D] mt-10 mb-10">
            <h1 className="text-4xl font-bold">Our Best Tour Spots</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                Spots.map(spot => 
                    <Tours
                    key={spot._id}
                    spot={spot}
                    ></Tours>
                )
            }
        </div>


        </div>
    );
};

export default Spots;