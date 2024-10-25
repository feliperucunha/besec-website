import React from "react";
//import about data
import { instagramData } from "../data";
import { InstagramEmbed } from 'react-social-media-embed';
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

        <div className="border-[#00aff0] border-2 py-4 w-full ">
          <div className="text-center text-center flex items-center justify-center flex-col">
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

          <div className="grid gap-4 px-4 md:grid-cols-3">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramEmbed  url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} height={380} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramEmbed  url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} height={380} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramEmbed  url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} height={380} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramEmbed  url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} height={380} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramEmbed  url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} height={380} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramEmbed  url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} height={380} />
            </div>
          </div>


          {/* insert instagram grid here */}
        </div>
      </div>
    </section>
  );
};

export default InstagramPublications;
