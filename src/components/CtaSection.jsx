import React from "react";
//*import data
import { ctaData } from "../data.jsx";
//* import React icons
import { BsArrowRight } from "react-icons/bs";
const CtaSection = () => {
  const { title, subtitle, btnText1, btnText2 } = ctaData;
  return (
    <section className="my-[75px] xl:my-[150px]" data-aos="fade-up">
      <div className=" container  mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center ">
          {/* Text */}
          <div className="py-12 text-center xl:py-24 xl:text-left">
            <h2
              className="text-[40px] font-bold leading-tight mb-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {title}
            </h2>
            <p className="lead" data-aos="fade-up">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-y-4 gap-x-[30px]">
            <button
              className="btn  bg-accent-secondary text-base  text-white hover:bg-accent-secondary_hover px-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {btnText1}
            </button>
            <button
              className="btn  bg-white text-base font-bold text-primary  hover:bg-accent-primary shadow-xl group hover:text-white px-8 flex items-center justify-center gap-x-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {btnText2}
              <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
