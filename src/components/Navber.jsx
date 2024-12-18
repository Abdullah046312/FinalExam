import React, { useState } from 'react';
import Container from './Container';
import logo from "../assets/Logo.png";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="py-5 bg-[#FEF8E4]">
      <Container>
        <div className="flex justify-between items-center flex-wrap">
          {/* Logo Section */}
          <div className="w-full sm:w-[10%] mb-4 sm:mb-0">
            <img src={logo} alt="Logo" className="mx-auto sm:mx-0" />
          </div>

          {/* Navigation Links */}
          <div className={`w-full sm:w-[50%] flex justify-center sm:justify-start mb-4 sm:mb-0 ${isMenuOpen ? "block" : "hidden"} sm:block`}>
            <ul className="flex flex-wrap justify-center sm:justify-start gap-5 sm:gap-10">
              <li className="flex items-center gap-1 text-[16px] sm:text-[18px] text-[#262626] font-NunSans font-medium">
                Home <IoIosArrowDown />
              </li>
              <li className="flex items-center gap-1 text-[16px] sm:text-[18px] text-[#262626] font-NunSans font-medium">
                About <IoIosArrowDown />
              </li>
              <li className="flex items-center gap-1 text-[16px] sm:text-[18px] text-[#262626] font-NunSans font-medium">
                Service <IoIosArrowDown />
              </li>
              <li className="flex items-center gap-1 text-[16px] sm:text-[18px] text-[#262626] font-NunSans font-medium">
                Portfolio <IoIosArrowDown />
              </li>
              <li className="flex items-center gap-1 text-[16px] sm:text-[18px] text-[#262626] font-NunSans font-medium">
                Price <IoIosArrowDown />
              </li>
              <li className="flex items-center gap-1 text-[16px] sm:text-[18px] text-[#262626] font-NunSans font-medium">
                Blog <IoIosArrowDown />
              </li>
              {/* <li className="flex items-center gap-1 text-[16px] sm:text-[18px] text-[#262626] font-NunSans font-medium">
                Content Mkt <IoIosArrowDown />
              </li> */}
            </ul>
          </div>

          {/* Contact Us Button */}
          <div className="w-full sm:w-[10%] flex justify-center sm:justify-end">
            <button className="py-3 px-5 rounded-[50px] bg-[#FF7628] text-[#FFF] font-NunSans font-semibold hover:bg-[#FF7628] hover:text-[#262626] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>

          {/* Hamburger Menu Icon for mobile (right-aligned) */}
          <div className="sm:hidden flex items-center ml-auto bg-[#FF7628] p-2 rounded-full" onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoIosClose className="text-2xl text-[#FFF] font-bold" />
            ) : (
              <IoIosMenu className="text-2xl text-[#FFF] font-bold" />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navber;
