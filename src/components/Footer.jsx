import React from "react";
//* import footer data
import { footerData } from "../data";
//* import component
import CopyRight from "./Copyright";
const Footer = () => {
  const { logo, address, email, phone, list1, list2, sociallist } = footerData;
  return (
    <footer data-aos="fade-up">
      <div className=" container mx-auto mb-10">
        <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
          <div className="w-[45%] mx-auto flec flex-col items-center xl:items-start ">
            {/* logo */}
            <a
              href="#"
              className="flex items-center justify-center xl:justify-start"
            >
              <img className="mb-[65px] max-w-[300px]" src={logo} alt="" />
            </a>
            {/*address*/}
            {/* <div className="max-w-[260px] mb-5 text-white font-bold">
              {address}
            </div> */}
            {/*email*/}
            <div className=" font-light italic text-white">{email}</div>
            {/*Phone*/}
            <div className=" font-light italic text-white">{phone}</div>
          </div>

          {/* Lists */}
          <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between">
            {/* List1 */}
            <div>
              <div className=" font-extrabold mb-8 text-white">
                Sobre
              </div>
              <ul className="flex flex-col gap-y-4">
                {list1.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className=" text-white" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* List2 */}
            <div>
              <div className=" font-extrabold  mb-8 text-white">
                Ajuda
              </div>
              <ul className="flex flex-col gap-y-4">
                {list2.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className="  text-white" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Social Media */}
            <div>
              <div className=" font-extrabold text-primary mb-8 text-white">
                Redes Sociais
              </div>
              <ul className="flex gap-y-4 gap-x-4 justify-center ">
                {sociallist.map((item, index) => {
                  return (
                    <li
                      className="w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all "
                      key={index}
                    >
                      <a className="text-white text-xl" href={item.href}>
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <CopyRight /> */}
    </footer>
  );
};

export default Footer;
