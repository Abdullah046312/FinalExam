import React from 'react';
import Container from './Container';
import logo2 from "../assets/logo2.png";

const Footer = () => {
  return (
    <section className="pt-20 bg-[#F4F4F4] mt-10">
      <Container>
        <div className="flex flex-wrap sm:flex-nowrap justify-between ">
          {/* Logo and Description */}
          <div className="w-full sm:w-[30%] mb-6 sm:mb-0">
            <img src={logo2} alt="Logo" className="mb-4" />
            <p className="text-[#6C7D93] text-[18px]">
              Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.
            </p>
          </div>

          {/* Features + Products Section (combined) */}
            {/* Features Section */}
            <div className="w-[30%] sm:w-[20%] mb-4 sm:mb-0">
              <h4 className="text-lg font-semibold text-[#262626] mb-4">Features</h4>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Home</h5>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">About</h5>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Pricing</h5>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Blog</h5>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Benefit</h5>
            </div>

            {/* Products Section */}
            <div className="w-[30%] sm:w-[20%]">
              <h4 className="text-lg font-semibold text-[#262626] mb-4">Products</h4>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Task Management</h5>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Company Growth</h5>
              <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Time Tracking</h5>
            </div>
          

          {/* Support Section */}
          <div className="w-[30%] sm:w-[20%] mb-6 sm:mb-0">
            <h4 className="text-lg font-semibold text-[#262626] mb-4">Support</h4>
            <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Customer Service</h5>
            <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Accessibility</h5>
            <h5 className="text-sm text-[#6C7D93] mb-2 cursor-pointer">Contact Us</h5>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between mt-10 border-t pt-6 text-[#6C7D93]">
          <div className="w-full sm:w-[60%] text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-sm sm:text-base">©2024 Innovate. All rights reserved.</h2>
            <h2 className="text-sm sm:text-base">Design By Abdullah Al-Mamun.</h2>
          </div>

          <div className="w-full sm:w-[20%] text-center sm:text-left  sm:mb-0">
            <h4 className="text-sm cursor-pointer hover:text-[#FF7628]">Privacy Policy</h4>
          </div>

          <div className="w-full sm:w-[20%] text-center sm:text-left">
            <h4 className="text-sm cursor-pointer hover:text-[#FF7628]">Terms & Conditions</h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
