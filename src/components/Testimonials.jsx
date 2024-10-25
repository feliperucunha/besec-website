import React from "react";
//import about data
import { partersData, testimonials } from "../data";
const Testimonials = () => {
  //About data Content
  const { image, title, partersLogos } = partersData;
  return (
    <section
      id="about"
      className="my-28"
      data-aos="fade-up"
      data-aos-offset="150"
    >
      <div className=" container mx-auto">
        <div
          className="  rounded-[50px]
         min-h-[560px] px-12 pb-12 flex flex-col text-center
         xl:items-center xl:pb-0  "
        >
          {/* Text Section */}
          <div className="flex-1">
            <h2
              className="text-[40px] font-bold leading-tight mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {testimonials.title}
            </h2>
            <div className="border-[#00aff0] border-2 grid gap-2 p-4 md:p-10 md:grid-cols-3">
              {partersLogos.map((partner, index) => {
                return (
                  <div key={index} className="flex md:flex-row flex-col items-center justify-center p-4">
                    <img src={partner} className="max-w-[80px] md:max-w-[100px] rounded mb-2" />
                    <span className="text-white text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti distinctio assumenda blanditiis.
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
