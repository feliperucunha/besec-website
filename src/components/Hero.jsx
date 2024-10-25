import React from "react";
//*import hero data
import { heroData } from "../data.jsx";
//* import Components
import Header from "./Header.jsx";
const Hero = () => {
  //* destruture hero data
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section className="lg:h-screen py-3 mt-20 md:mt-0 h-[70vh]">
      <Header />
      <div className=" container mx-auto h-screen relative ">
        <div className=" flex flex-col xl:flex-row items-center  h-full md:py-12">
          {/* Text */}
          <div className=" text-center xl:mt-[-45px]  xl:text-left xl:absolute">
            <h1
              className="text-[40px] xl:text-[80px] font-bold leading-[1.1] xl:max-w-[700px] mb-6 lg:mb-12 text-[#eef7ff] uppercase"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {title}
            </h1>
            <p
              className="lead mb-6  xl:max-w-[600px] lg:mb-12 text-[#00aff0] text-3xl"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {subtitle}
            </p>
            <button
              className="btn text-lg text-white font-semibold  bg-[#f06500] hover:bg-accent-primary_hover px-10 mb-8 xl:mb-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {btnText}
            </button>
          </div>
          {/* image */}
          <div
            className="xl:absolute xl:-right-12 xl:bottom-17 relative "
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img src={image} alt="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
