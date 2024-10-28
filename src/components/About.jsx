import React from "react";
//import about data
import { aboutData, accomplishmentsData } from "../data";
import { AnimatedCounter } from "./AnimatedCounter";
const About = () => {
  //About data Content
  const { image, title, subtitle } = aboutData;
  return (
    <section
      id="aboutus"
      className="my-[20px]"
      data-aos="fade-up"
      data-aos-offset="150"
    >
      <div className=" container mx-auto">
        <div
          className="  rounded-[50px]
         min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row 
         xl:items-center xl:text-left xl:gap-x-[60px] xl:pb-0  "
        >
          {/* Image Section */}
          <div className="flex-1" data-aos="zoom-in-left">
            <img src={image} alt="/" />
          </div>
          {/* Text Section */}
          <div className="flex-1 xl:pr-12 border-[#00aff0] border-2 px-3 py-5">
            <h2
              className="text-[40px] font-bold leading-tight mb-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {title}
            </h2>
            <p
              className="max-w-[474px] mx-auto xl:mx-0 text-justify text-white"
              data-aos="fade-up"
              data-aos-delay="300"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          </div>
        </div>
      </div>

      <div
        className="w-full flex flex-wrap justify-center gap-6 my-6 md:gap-20 md:my-5 sm:mx-auto"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        {accomplishmentsData.map((card, index) => (
          <AnimatedCounter
          key={index}
          number={card.number}
          text={card.text}
        />
        ))}
      </div>
    </section>
  );
};

export default About;
