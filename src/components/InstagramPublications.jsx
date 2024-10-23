import React from "react";
//import about data
import { instagramData } from "../data";
const InstagramPublications = () => {
  //About data Content
  const { title, subtitle } = instagramData;
  return (
    <section
      id="about"
      className="my-[20px]"
      data-aos="fade-up"
      data-aos-offset="150"
    >
      <div className="container mx-auto">
        {/* Text */}

        <div className="border-[#00aff0] border-2 p-4 w-full text-center flex items-center justify-center">
          <div className="text-center">
            <h2
              className="text-[40px] font-bold leading-tight mb-4"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              {title}
            </h2>
            <p
              className="lead max-w-[585px] mx-auto mb-16 xl:mb-24 text-white"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {subtitle}
            </p>
          </div>

          {/* insert instagram grid here */}
        </div>
      </div>
    </section>
  );
};

export default InstagramPublications;
