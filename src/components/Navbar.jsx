import React from "react";
//* import navigation data
import { navigationData } from "../data";
const Navbar = () => {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return window.scrollTo({ top: 0, behavior: "smooth" });

    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };
  return (
    <nav>
      <div>
        <ul className="flex gap-x-8">
          {navigationData.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className="hover:text-primary transition-all text-[#00aff0] cursor-pointer"
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
