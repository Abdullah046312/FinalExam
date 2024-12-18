import React from 'react';
import Container from './Container';
import images10 from "../assets/images10.png";
import images11 from "../assets/images11.jpg";
import logo2 from "../assets/logo2.png";

const SecoundPart = () => {
  return (
    <section className="pt-16">
      <Container>
        {/* Main Flexbox Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">

          {/* Left Section with Image */}
          <div className="w-full lg:w-[48%]">
            <img src={images10} alt="Image 10" className="w-[80%] h-auto" />
          </div>

          {/* Right Section with Text */}
          <div className="w-full lg:w-[48%] text-center lg:text-left">
            <img src={logo2} alt="Logo" className="mx-auto lg:mx-0 mb-6 w-[100px]" />
            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] text-[#262626] font-NunSans font-bold mb-4">
              Who We Are
            </h2>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#6C7D93] font-Paprika mb-6">
              We are a Dhaka-based Digital Communication Agency committed to creating actionable strategies, online marketing, and technology solutions for our partners. 
              As a multidisciplinary company, we operate as a unified, collaborative team.
            </p>
            <img src={images11} alt="Image 11" className="w-[80%] h-auto mt-6" />
          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default SecoundPart;
