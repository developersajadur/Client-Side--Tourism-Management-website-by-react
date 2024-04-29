import Tours from "../ToursRoutes/Tours";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard,FreeMode } from 'swiper/modules';

const TouristsSpots = ({spots}) => {
    return (
        <div className="mt-20 px-2 lg:px-20 mb-20">
            <h1 className="text-3xl lg:text-5xl font-bold text-center mb-12">Most Popular Tours {spots.length}</h1>
            <div className="">
            <Swiper
        breakpoints={
            {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        }
        freeMode={true}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[FreeMode, Pagination,Keyboard, Autoplay]}
        className="mySwiper "
      >

        {
             Array.isArray(spots) && spots?.map(spot =>
                <SwiperSlide
                key={spot._id}>
                <Tours
                    spot={spot}></Tours>
                </SwiperSlide>
            )
        }
 
      </Swiper>
            </div>
            
        </div>
    );
};

export default TouristsSpots;