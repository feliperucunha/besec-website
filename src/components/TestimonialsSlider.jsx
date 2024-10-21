import React from "react";
//* import Testimonial Data
import { testimonialsData } from "../data";
//* import Swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
//* import swiper style
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";
//import required moduules
import { Pagination } from "swiper/modules";
const TestimonialsSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        const { image, message, name, web } = slide;
        return (
          <SwiperSlide
            key={index}
            className="bg-white rounded-2xl border  h-[330px] border-accent-primary xl:max-w-[600px] pt-[60px] px-[35px] xl:px-[70px] mb-10 pb-[50px] flex items-start  shadow-xl  "
          >
            {/*Avatar Image */}
            <img src={image} alt="" />
            {/*Text */}
            <div className="ml-8">
              <div className="text-lg text-primary font-bold">{name}</div>
              <div className="mb-4 font-semibold text-accent-primary">
                {web}
              </div>
              <p className="max-w-[350px] text-justify">{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialsSlider;
