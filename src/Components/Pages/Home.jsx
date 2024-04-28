
import { useLoaderData } from "react-router-dom";
import ExoticPlaces from "./HomePage/ExoticPlaces";
import Slider from "./HomePage/Slider";
import TouristsSpots from "./HomePage/TouristsSpots";

const Home = () => {
    const spots = useLoaderData();
    return (
        
        <div>
            <Slider></Slider>
            <ExoticPlaces></ExoticPlaces>
            <TouristsSpots 
            spots={spots}
            ></TouristsSpots>
        </div>
    );
};

export default Home;