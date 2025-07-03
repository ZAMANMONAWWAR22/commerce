import React from "react";

const SaleBanner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-orange-300 via-pink-200 to-purple-400 p-6 md:p-12 text-white">

      {/* LEFT SECTION */}
      <div className="text-center md:text-left space-y-4 max-w-md">
        <div className="bg-white p-4 rounded-xl shadow-lg inline-block mx-auto md:mx-0">
          <div className="bg-purple-700 text-white text-xs font-bold py-1 px-3 rounded-t-md mb-2">
            meesho
          </div>
          <div className="text-black space-y-1">
            <h2 className="text-base md:text-xl font-bold">FIRST SUNDAY</h2>
            <h1 className="text-lg md:text-3xl font-extrabold">MAHA SALE</h1>
            <div className="bg-purple-600 text-white rounded-full mt-4 py-1 px-3 text-xs md:text-sm font-semibold inline-block">
              6<sup>th</sup> JULY
            </div>
          </div>
        </div>

        <div className="text-3xl md:text-5xl font-extrabold text-pink-900 mt-4">
          <span className="text-white text-base md:text-lg mr-1">UP TO</span>
          70%
          <span className="text-white text-base md:text-lg ml-1">OFF</span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="text-center md:text-right mt-8 md:mt-0 space-y-2 max-w-xs">
        <h2 className="text-lg md:text-2xl font-semibold text-white">
          Smart Shopping
        </h2>
        <h3 className="text-base md:text-xl font-medium text-white">
          Trusted by Millions
        </h3>
        <button className="bg-white text-purple-800 font-semibold px-5 py-2 rounded-md hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>

    </div>
  );
};

export default SaleBanner;