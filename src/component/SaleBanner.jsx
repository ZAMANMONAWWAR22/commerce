import React from "react";

const SaleBanner = () => {
  return (
    <div className="w-full min-h-[120px] flex flex-col items-center justify-center bg-gradient-to-r from-orange-300 via-pink-300 to-purple-400 relative overflow-hidden px-0 py-0">
      {/* Background Image Only */}
      <img
        src="https://images.meesho.com/images/marketing/1746425994914.webp"
        alt="Smart Shopping"
        className="w-full h-auto block"
        style={{ color: 'transparent', width: '100%', height: 'auto', display: 'block' }}
        loading="eager"
        decoding="async"
      />
      {/* Overlay Content */}
      <div className="absolute inset-y-0 right-0 flex flex-col items-end justify-center z-10 pr-8 h-full">
        <div className="text-right mb-2">
          <div className="text-2xl md:text-4xl font-bold text-white drop-shadow">Smart Shopping</div>
          <div className="text-2xl md:text-4xl font-bold text-white drop-shadow">Trusted by Millions</div>
        </div>
        <button className="bg-white text-purple-800 px-6 py-2 rounded-lg hover:bg-gray-200 font-bold shadow transition text-base md:text-lg">Shop Now</button>
      </div>
    </div>
  );
};

export default SaleBanner;
