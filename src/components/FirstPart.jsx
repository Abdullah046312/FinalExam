import React from 'react';
import logo2 from "../assets/logo2.png";
import images7 from "../assets/images7.jpg";
import images8 from "../assets/images8.jpg";
import images9 from "../assets/images9.jpg";
import Container from './Container';

const FirstPart = () => {
  return (
    <section>
      <Container>
        {/* Section for Service Information */}
        <div className="text-center pt-5">
          <div className="w-full md:w-[30%] mx-auto">
            <img src={logo2} alt="Logo" className="mx-auto mb-4" />
            <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-NunSans font-extrabold text-[#262626]">Our Services</h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#6C7D93] font-Oswald">We have been providing great flooring solutions service.</p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-between mt-10">
          {/* First Service Card */}
          <div className="w-full sm:w-[48%] md:w-[30%] bg-[#EBF7E9] py-5 px-5 mb-6 sm:mb-0 text-center rounded-lg transition-all duration-500 ease-in-out transform hover:bg-[#D8EAFF] hover:scale-105 hover:rotate-3 hover:shadow-xl hover:shadow-[#FF7628]">
            <img src={images7} alt="Marketing Strategy" className="mx-auto mb-4" />
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] text-[#262626] font-NunSans font-bold">MARKETING STRATEGY</h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#6C7D93] font-Oswald mb-4">Social Media has changed the way we interact & do business while creating</p>
            <h4 className="text-[16px] sm:text-[18px] text-[#FF7628] font-NunSans font-semibold cursor-pointer hover:text-[#262626] transition-all duration-300 ease-in-out">Read more</h4>
          </div>

          {/* Second Service Card */}
          <div className="w-full sm:w-[48%] md:w-[30%] bg-[#EBF7E9] py-5 px-5 mb-6 sm:mb-0 text-center rounded-lg transition-all duration-500 ease-in-out transform hover:bg-[#D8EAFF] hover:scale-105 hover:rotate-3 hover:shadow-xl hover:shadow-[#FF7628]">
            <img src={images8} alt="Marketing Strategy" className="mx-auto mb-4" />
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] text-[#262626] font-NunSans font-bold">MARKETING STRATEGY</h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#6C7D93] font-Oswald mb-4">Social Media has changed the way we interact & do business while creating</p>
            <h4 className="text-[16px] sm:text-[18px] text-[#FF7628] font-NunSans font-semibold cursor-pointer hover:text-[#262626] transition-all duration-300 ease-in-out">Read more</h4>
          </div>

          {/* Third Service Card */}
          <div className="w-full sm:w-[48%] md:w-[30%] bg-[#EBF7E9] py-5 px-5 mb-6 sm:mb-0 text-center rounded-lg transition-all duration-500 ease-in-out transform hover:bg-[#D8EAFF] hover:scale-105 hover:rotate-3 hover:shadow-xl hover:shadow-[#FF7628]">
            <img src={images9} alt="Marketing Strategy" className="mx-auto mb-4" />
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] text-[#262626] font-NunSans font-bold">MARKETING STRATEGY</h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#6C7D93] font-Oswald mb-4">Social Media has changed the way we interact & do business while creating</p>
            <h4 className="text-[16px] sm:text-[18px] text-[#FF7628] font-NunSans font-semibold cursor-pointer hover:text-[#262626] transition-all duration-300 ease-in-out">Read more</h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FirstPart;
