import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import "../../../../index.css"
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

  const Slider = () => {
    const [countrys , setCountrys] = useState([])
    useEffect(() => {
      fetch("https://server-side-nine-theta.vercel.app/countrys")
      .then(res => res.json())
      .then(data => setCountrys(data))
    }, [])

  return (
    <div >
      <div className='z-10'>
      <Swiper
        cssMode={true}
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ dynamicBullets: true }}
        loop={true}
        mousewheel={true}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper h-60 lg:h-96 sm:mt-5"
      >




{
  countrys.map(country => 
    <SwiperSlide key={country._id} className='h-60 lg:h-96 relative'> 
     <img className='h-60 lg:h-96 absolute opacity-70 z-0' src={country.image || "https://i.ibb.co/qNM97pQ/people-flag-with-celebration-bangladesh-independence-day-835895-3708.jpg"} alt="" />
            <div className="absolute z-10 inset-0 flex flex-col gap-2 items-center justify-center">
              <h1 className='text-2xl lg:text-5xl font-bold text-center text-black'>{country.country_Name || "Not Found"}</h1>
              <p className="lg:text-lg font-semibold text-black w-[80%] lg:w-[40%]">{country.details || "Not Found"}</p>
              <Link to={`/countrys/${country.country_Name || "Not Found"}`}><button className="btn border-none bg-[#E7A500] text-black ">View Tourism Spots</button></Link>
            </div>
          </SwiperSlide>
  )
}
      </Swiper>
    </div>
    </div>
  );
}

export default Slider
