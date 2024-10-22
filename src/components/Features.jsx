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
        <ul className={`my-12 flex flex-wrap lg:my-16 md:gap-6 sm:flex-col lg:flex-row sm:my-8 justify-center`}             data-aos="fade-up"
            data-aos-delay="100">
          {list.map(({ doc, text, Icon }) => (
            <a
              href={doc}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center p-2 text-white text-center transition-all duration-300 ease-in-out gap-2 rounded-lg hover:text-aqua hover:scale-110 w-full sm:w-full md:w-1/2 lg:w-1/6"
            >
              <Icon className="text-[60px]" />
              <p className="text-[20px]">{text}</p>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
