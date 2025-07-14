// src/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#5a2e8c] to-[#9a4dce] overflow-hidden">
      {/* Left Section - Sale Info */}
      <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center p-4">
        {/* Background Circle/Shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full scale-125 opacity-70"></div>
        {/* Content */}
        <div className="relative text-white text-center z-10">
          {/* Mobile Icon */}
          <div className="mb-2">
            {/* You can use an actual image or an SVG icon here */}
            {/* For simplicity, let's use a placeholder */}
            <div className="w-16 h-16 bg-[#5a2e8c] rounded-lg mx-auto flex items-center justify-center text-2xl font-bold">
              m
            </div>
            <p className="text-xs mt-1">Meesho</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            FIRST SUNDAY <br /> MAHA SALE
          </h2>
          <div className="mt-4 bg-[#5a2e8c] py-2 px-4 rounded-full inline-block text-lg md:text-xl font-semibold">
            6TH JULY
          </div>
        </div>
      </div>

      {/* Right Section - Smart Shopping */}
      <div className="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center p-4">
        {/* Background Visuals - abstract shapes/gradients */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#7c3aed] to-[#d661ea] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#e0c4f8] to-transparent opacity-30 rounded-full scale-150 animate-pulse"></div>

        <div className="relative text-white text-center z-10">
          <p className="text-4xl md:text-6xl font-extrabold text-[#7efffc] drop-shadow-lg">
            UP TO <br /> 70% OFF
          </p>
          <h3 className="text-2xl md:text-4xl font-bold mt-8">
            Smart Shopping <br /> Trusted by Millions
          </h3>
          <button className="mt-8 px-8 py-3 bg-white text-[#5a2e8c] font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;