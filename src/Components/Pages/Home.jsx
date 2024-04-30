
import { useLoaderData } from "react-router-dom";
import ExoticPlaces from "./HomePage/ExoticPlaces";
import Slider from "./HomePage/Slider";
import TouristsSpots from "./HomePage/TouristsSpots";
import HomePageBlogs from "./HomePage/HomePageBlogs";
import { Helmet } from "react-helmet";

const Home = () => {
    const spots = useLoaderData();
    return (
        
        <div>
              <Helmet>
                <title>
                   Welcome Our Website
                </title>
            </Helmet>
            <Slider></Slider>
            <ExoticPlaces></ExoticPlaces>
            <TouristsSpots 
            spots={spots}
            ></TouristsSpots>
            <HomePageBlogs></HomePageBlogs>
        </div>
    );
};

export default Home;