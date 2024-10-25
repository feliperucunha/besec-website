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
import { Pagination, Autoplay } from "swiper/modules";
const ClientsSlider = () => {
  return (
    <Swiper
      slidesPerView={"3"}
      centeredSlides={true}
      spaceBetween={20}
      loop="true"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        const { image, message, name, web } = slide;
        return (
          <SwiperSlide
            key={index}
            className="h-[330px] max-w-[120px] xl:max-w-[200px] pt-[60px] xl:px-[35px] xl:px-[20px] md:mb-10 pb-[50px] flex items-start"
          >
            {/*Avatar Image */}
            <img src={image} alt="" />
            {/*Text */}
            {/* <div className="ml-8">
              <div className="text-lg text-primary font-bold">{name}</div>
              <div className="mb-4 font-semibold text-accent-primary">
                {web}
              </div>
              <p className="max-w-[350px] text-justify">{message}</p>
            </div> */}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ClientsSlider;
