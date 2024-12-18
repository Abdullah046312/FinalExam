import React from 'react';
import Container from './Container';
import logo2 from "../assets/logo2.png";
import images13 from "../assets/images13.png";

const FourthPart = () => {
  return (
    <section className='pt-20'>
      <Container>
        <div className="text-center">
          {/* Logo and Title Section */}
          <div className="w-full sm:w-[40%] mx-auto mb-6">
            <img src={logo2} alt="Logo" className="mx-auto" />
            <h2 className="text-3xl sm:text-[48px] font-NunSans font-semibold text-[#262626]">
              Our creative process.
            </h2>
            <p className="text-base sm:text-lg text-[#6C7D93] mt-2">
              We provide digital experience services to startups and small businesses.
            </p>
          </div>

          {/* Step 1 - Desktop & Mobile Responsive Flex Layout */}
          <div className="flex flex-col sm:flex-row justify-around items-center pt-10 gap-10">
            <div className="h-[250px] w-full sm:w-[500px] bg-[#EBF7E9] py-10 px-5 rounded-[20px] hover:bg-[#D8EAFF] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
              <h4 className="font-medium text-lg text-[#FF7628]">Step-1</h4>
              <h2 className="text-[26px] sm:text-[32px] font-NunSans font-semibold text-[#262626] mt-2">
                Global SEO Research
              </h2>
              <p className="text-base sm:text-lg text-[#6C7D93] mt-2">
                Practical tools and features make it easier to build and manage your site.
              </p>
            </div>
            <div className="w-full sm:w-[50%]">
              <img src={images13} alt="Step 1" className="w-full sm:w-[80%] mx-auto hover:scale-105 hover:rotate-2 transition-all duration-300 ease-in-out" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col sm:flex-row justify-around items-center pt-10 gap-10">
            <div className="w-full sm:w-[50%]">
              <img src={images13} alt="Step 2" className="w-full sm:w-[80%] mx-auto hover:scale-105 hover:rotate-2 transition-all duration-300 ease-in-out" />
            </div>
            <div className="h-[250px] w-full sm:w-[500px] bg-[#EBF7E9] py-10 px-5 rounded-[20px] hover:bg-[#D8EAFF] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
              <h4 className="font-medium text-lg text-[#FF7628]">Step-2</h4>
              <h2 className="text-[26px] sm:text-[32px] font-NunSans font-semibold text-[#262626] mt-2">
                Social media integration
              </h2>
              <p className="text-base sm:text-lg text-[#6C7D93] mt-2">
                Practical tools and features make it easier to build and manage your site.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col sm:flex-row justify-around items-center pt-10 gap-10">
            <div className="h-[250px] w-full sm:w-[500px] bg-[#EBF7E9] py-10 px-5 rounded-[20px] hover:bg-[#D8EAFF] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
              <h4 className="font-medium text-lg text-[#FF7628]">Step-3</h4>
              <h2 className="text-[26px] sm:text-[32px] font-NunSans font-semibold text-[#262626] mt-2">
                Launching the Application
              </h2>
              <p className="text-base sm:text-lg text-[#6C7D93] mt-2">
                Practical tools and features make it easier to build and manage your site.
              </p>
            </div>
            <div className="w-full sm:w-[50%]">
              <img src={images13} alt="Step 3" className="w-full sm:w-[80%] mx-auto hover:scale-105 hover:rotate-2 transition-all duration-300 ease-in-out" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FourthPart;
