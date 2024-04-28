const ExoticPlaces = () => {
    return (
        <div className="mt-20 px-2 lg:px-20 mb-20">
            <h1 className="text-3xl lg:text-5xl font-bold text-center mb-12">Go Exotic Places</h1>
            <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row gap-5">
                <div style={{backgroundImage: "url('https://i.ibb.co/YLQZN16/destination-1-1-f32b89c3.png')"}} className="bg-no-repeat bg-cover rounded-2xl w-full lg:w-[25%] h-64 flex items-end">
                    <h1 className="text-3xl font-bold text-white ml-5 mb-5">Bangladesh</h1>
                </div>

                <div style={{backgroundImage: "url('https://i.ibb.co/WFMjQBr/destination-1-2-6b007ca8.png')"}} className="bg-no-repeat bg-cover rounded-2xl w-full lg:w-[50%] h-72 lg:h-64 flex items-end">
                <h1 className="text-3xl font-bold text-white ml-5 mb-5">Thailand</h1>
                </div>

                <div style={{backgroundImage: "url('https://i.ibb.co/MhnrDvM/destination-1-3-d37d50e6.png')"}} className="bg-no-repeat bg-cover rounded-2xl w-full lg:w-[25%] h-72 lg:h-64 flex items-end">
                <h1 className="text-3xl font-bold text-white ml-5 mb-5">Malaysia</h1>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
            <div style={{backgroundImage: "url('https://i.ibb.co/zN46ttR/destination-1-4-0ba8a85a.png')"}} className="bg-no-repeat bg-cover rounded-2xl w-full lg:w-[50%] h-72 lg:h-64 flex items-end">
            <h1 className="text-3xl font-bold text-white ml-5 mb-5">Vietnam</h1>
            </div>

            <div style={{backgroundImage: "url('https://i.ibb.co/ykK64c1/destination-1-5-a1a8d71b.png')"}} className="bg-no-repeat bg-cover rounded-2xl w-full lg:w-[50%] h-72 lg:h-64 flex items-end">
            <h1 className="text-3xl font-bold text-white ml-5 mb-5">Cambodia</h1>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ExoticPlaces;