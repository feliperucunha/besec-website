import React from "react";
//import about data
import { partersData } from "../data";
const Partners = () => {
  //About data Content
  const { image, title, partersLogos } = partersData;
  return (
    <section
      id="about"
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
          <div className="flex-1">
            <h2
              className="text-[40px] font-bold leading-tight mb-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {title}
            </h2>
            <div className="border-[#00aff0] border-2 grid gap-px grid-cols-3 p-4">
              {partersLogos.map((partner) => {
                return (
                  <div className="flex items-center justify-center">
                    <img src={partner} className="max-w-[100px] " />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
