import React from 'react';
import Container from './Container';
import logo2 from "../assets/logo2.png";
import images12 from "../assets/images12.png";

const ThirdPart = () => {
  return (
    <section className="py-8 sm:py-16">
      <Container>
        <div className="w-full text-center">
          {/* Logo Section */}
          <div className=" ">
            <img src={logo2} alt="Logo" className="mx-auto" />
          </div>

          {/* Work Showcase Title */}
          <h2 className="text-[32px] sm:text-[48px] font-NunSans font-bold text-[#262626] ">
            Work Showcase
          </h2>

          {/* Category List */}
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-[20px]">
            <li className="text-[#FF7628] font-medium cursor-pointer hover:text-[#262626] transition duration-300">All</li>
            <li className="text-[#262626] font-medium cursor-pointer hover:text-[#FF7628] transition duration-300">Digital Mkt</li>
            <li className="text-[#262626] font-medium cursor-pointer hover:text-[#FF7628] transition duration-300">Branding</li>
            <li className="text-[#262626] font-medium cursor-pointer hover:text-[#FF7628] transition duration-300">Content Mkt</li>
            <li className="text-[#262626] font-medium cursor-pointer hover:text-[#FF7628] transition duration-300">Social Media Mkt</li>
          </ul>

          {/* Image Section */}
          <div className="w-full sm:w-[80%] mx-auto">
            <img src={images12} alt="Work Showcase" className="w-full h-auto mx-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ThirdPart;
