// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import Tours from "../ToursRoutes/Tours";
import { Helmet } from "react-helmet";

const CountrysSports = () => {

    const data = useLoaderData()
    console.log(data);
    return (
        <div className="px-2 lg:px-10">
              <Helmet>
                <title>
                Our Recommended country
                </title>
            </Helmet>
            <div className="w-full text-center py-5 rounded-xl bg-[#1313130D] mt-10 mb-10">
            <h1 className="text-4xl font-bold">Country</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                data.map( spot => <Tours
                key={spot._id}
                spot={spot}
                ></Tours>)
            }
        </div>
        </div>
    );
};

export default CountrysSports;