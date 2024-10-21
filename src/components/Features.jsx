import React from "react";
//* import Features Data
import { featuresData } from "../data";
//* import React-icon
import { BsArrowRight } from "react-icons/bs";
//*  Features Content
const { title, subtitle, list } = featuresData;
const Features = () => {
  return (
    <section className="my-[70px] xl:my-[150px]">
      <div className=" container mx-auto">
        {/* Text */}
        <div className="text-center">
          <h2
            className="text-[40px] font-bold leading-tight mb-6 xl:mb-12"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {title}
          </h2>
          <p
            className="lead max-w-[585px] mx-auto mb-16 xl:mb-24"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {subtitle}
          </p>
        </div>
        {/* Feature lists */}
        <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2 ">
          {list.map((feature, index) => {
            //Feature Structure
            const { image, imagebg, title, description, linkText, delay } =
              feature;
            return (
              <div
                className="w-full relative max-w-[530px] h-[360px] flex flex-col justify-center items-center xl:flex-row xl:justify-start mx-auto"
                data-aos="zoom-in"
                data-aos-delay={delay}
                data-aos-offset="10"
                key={index}
              >
                {/* Background Image */}
                <div className="  top-0 right-0 -z-10  absolute xl:flex ">
                  <img src={imagebg} alt="" />
                </div>
                {/* Icon Image */}
                <div className="max-w-[180px] xl:mr-7 xl:max-w-[230px]">
                  <img src={image} alt="/" />
                </div>
                {/* Text */}
                <div className="max-w-[220px]">
                  <h3 className="text-[24px] mb-4">{title}</h3>
                  <p className=" font-light italic gap-x-2 group">
                    {description}
                  </p>
                  <div className="flex mt-2 items-center gap-x-2 group ">
                    <a className=" text-primary font-bold" href="">
                      {linkText}
                    </a>
                    <BsArrowRight className="text-xl text-accent-primary  group-hover:ml-[5px] transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
