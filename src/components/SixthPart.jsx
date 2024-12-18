import React from 'react';
import Container from './Container';
import logo2 from "../assets/logo2.png";
import images15 from "../assets/images15.png";

const SixthPart = () => {
  return (
    <section>
      <Container>
        {/* Title and Description */}
        <div className="w-full sm:w-[40%] mx-auto text-center mb-10">
          <img src={logo2} alt="Logo" className="mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-NunSans font-semibold text-[#262626] mt-4 mb-2">Our Latest Blog</h2>
          <p className="text-[#6C7D93] text-sm sm:text-base">
            We provide digital experience services to startups and small businesses.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-wrap justify-between gap-6">
          {/* Blog Card 1 */}
          <div className="w-full sm:w-[32%] bg-[#FCF8F8] bg-center bg-cover p-5 rounded-lg hover:scale-105 hover:bg-[#D8EAFF] hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 ease-in-out">
            <img src={images15} alt="Blog Image" className="w-full h-auto mb-4 rounded-lg" />
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#262626]">How to Be Ahead of Stock Changes</h2>
              <h5 className="text-sm text-gray-500 mb-2">By John - 5 Comments</h5>
              <h4 className="text-blue-500 cursor-pointer hover:underline">Read more</h4>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="w-full sm:w-[32%] bg-[#FCF8F8] bg-center bg-cover p-5 rounded-lg hover:scale-105 hover:bg-[#D8EAFF] hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 ease-in-out">
            <img src={images15} alt="Blog Image" className="w-full h-auto mb-4 rounded-lg" />
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#262626]">How to Be Ahead of Stock Changes</h2>
              <h5 className="text-sm text-gray-500 mb-2">By John - 5 Comments</h5>
              <h4 className="text-blue-500 cursor-pointer hover:underline">Read more</h4>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="w-full sm:w-[32%] bg-[#FCF8F8] bg-center bg-cover p-5 rounded-lg hover:scale-105 hover:bg-[#D8EAFF] hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 ease-in-out">
            <img src={images15} alt="Blog Image" className="w-full h-auto mb-4 rounded-lg" />
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#262626]">How to Be Ahead of Stock Changes</h2>
              <h5 className="text-sm text-gray-500 mb-2">By John - 5 Comments</h5>
              <h4 className="text-blue-500 cursor-pointer hover:underline">Read more</h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SixthPart;
