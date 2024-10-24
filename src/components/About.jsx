import React from "react";
//import about data
import { aboutData, accomplishmentsData } from "../data";
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
          <div
            key={index}
            className="bg-[#212D45] rounded-lg h-[55px] p-6 transition-transform duration-400 hover:scale-105 md:h-[135px] md:p-4 lg:h-[100px] sm:h-[50px] sm:p-3 flex-shrink-0 w-[240px] flex justify-center items-center"
          >
            <h5 className="font-semibold text-[36px] leading-[40px] text-white mb-2 md:text-[28px] md:leading-[32px] sm:text-[24px] sm:leading-[26px]">
              {`+${card.number}`}
            </h5>
            <p className="font-normal text-[18px] leading-[24px] text-white/75 md:text-[16px] md:leading-[20px] sm:text-[10px] sm:leading-[14px] ml-2">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
