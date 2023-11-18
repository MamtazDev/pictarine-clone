import React from "react";
import CenterdVideoSlider from "./CenteredVideoSlider";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const CarouselTeam = () => {
  return (
    <div className="centered_slider">
      <div className="container">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          effect={"coverflow"}
          navigation={{
            clickable: true,
          }}
          modules={[Navigation, FreeMode, EffectCoverflow]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <CenterdVideoSlider
              videSrc={
                "https://www.youtube.com/embed/CSHOiUYHD9k?si=9-8U88msnqR7m_OS"
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <CenterdVideoSlider
              videSrc={
                "https://www.youtube.com/embed/Cv2H3nFk4As?si=szWTpGUv8WPsiSwd"
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <CenterdVideoSlider
              videSrc={
                "https://www.youtube.com/embed/t5tAsV2YESo?si=WKQilG0AUWEf1kvg"
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <CenterdVideoSlider
              videSrc={
                "https://www.youtube.com/embed/yIv5VJeROl8?si=eWxMZt2lPKA1bHa5"
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <CenterdVideoSlider
              videSrc={
                "https://www.youtube.com/embed/AwrZoNgM6HU?si=aStCONkwOX1y9JCW"
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <CenterdVideoSlider
              videSrc={
                "https://www.youtube.com/embed/gjqMIQyKK7k?si=o8bTL3SdSSn5jfMc"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselTeam;
