import React, { useState } from "react";
//* import image
import logo from "../assets/logo.png";
//*import component
import Navbar from "./Navbar";
import NavMobile from "./NavMobile";
//* import icon
import { BsArrowRight } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header
      className="mb-8 lg:mb-0 z-20 relative px-4 lg:px-0"
      data-aos="fade-down"
      data-aos-delay="1200"
      data-aos-duration="1000"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            {/* logo */}
            <a href="#">
              <img src={logo} alt="/" />
            </a>
            {/* nav initially hidden - only show on large screen  */}
            <div className=" hidden lg:flex">
              <Navbar />
            </div>
          </div>
          {/* nav initially hidden - only show on large screen  */}
          <div
            className={`${
              navMobile ? "max-h-52" : "max-h-0"
            } lg:hidden absolute  top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>

          {/* Button */}
          <button className="btn flex items-center justify-center gap-x-[20px] group hover:text-white shadow-lg px-8 bg-[#00aff0] text-base font-bold text-primary  hover:bg-accent-primary">
            <span className="text-[#eef7ff]">Área do cliente</span>
          </button>

          {/* Nav Trigger Button - only show on mobile views */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className="lg:hidden text-2xl text-primary cursor-pointer"
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
