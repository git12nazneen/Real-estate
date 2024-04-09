
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css'


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// img
import banner1 from '../../assets/banner1..jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner4.jpg'
import banner4 from '../../assets/banner5.jpg'


const Banner = () => {

 

    return (
        <>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
            <SwiperSlide>
              <img src={banner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={banner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={banner3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={banner4} alt="" />
            </SwiperSlide>
          
            
          </Swiper>


        </>
      );
};

export default Banner;