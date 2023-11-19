import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../assets/img2.jpg";

// Import Swiper styles
import "swiper/css";

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>{Slider1}</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};

export default MySwiper;
