import React from 'react';
import logo2 from "../assets/logo2.png";
import images2 from "../assets/images2.png";
import Container from './Container';

const Banner = () => {
  return (
    <section className='bg-[#FEF8E4]'>
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Section */}
          <div className="w-full md:w-[40%] px-5 md:px-0">
            <img src={logo2} alt="Logo" className="mb-5 w-[100px] md:w-[120px]" />
            <h2 className='text-[24px] sm:text-[40px] md:text-[72px] text-[#262626] font-NunSans font-extrabold'>
              We Are Digital <span className='text-[24px] sm:text-[40px] md:text-[72px] text-[#FF7628] font-NunSans font-extrabold'> Marketing</span> Agency
            </h2>
            <p className='text-[14px] sm:text-[16px] md:text-[20px] text-[#6C7D93] font-Oswald'>
              Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing.
            </p>
            <button className='py-3 px-6 capitalize bg-[#FF7628] rounded-3xl text-[#FFF] font-NunSans font-bold mt-6 sm:mt-10 hover:bg-[#E85D12]'>
              Get Free Quote
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[50%] mt-10 md:mt-0 px-5 md:px-0">
            <img className='w-full' src={images2} alt="Banner Image" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
