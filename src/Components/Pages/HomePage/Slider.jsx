import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import "../../../../index.css"
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

  const Slider = () => {
//   const [sliders, setSliders] = useState([]);  
//   useEffect(() => {
//     fetch("./RoomDetailsData.json")
//       .then(res => res.json())
//       .then(data => setSliders(data))
//       .catch(error => console.error('Error fetching slider data:', error));
//   }, []);

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


    <SwiperSlide>
        <img src="https://i.ibb.co/k8tymyw/luxury-classic-modern-bedroom-suite-hotel.jpg" alt="" className='h-96'/>
    </SwiperSlide>
    <SwiperSlide>
        <img src="https://i.ibb.co/k8tymyw/luxury-classic-modern-bedroom-suite-hotel.jpg" alt="" className='h-96'/>
    </SwiperSlide>
    <SwiperSlide style={{ backgroundImage: "url('https://i.ibb.co/k8tymyw/luxury-classic-modern-bedroom-suite-hotel.jpg')" }}>
          </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}

export default Slider
