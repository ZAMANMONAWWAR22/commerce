import React from "react";

const SaleBanner = () => {
  return (
    <div className="relative w-full min-h-[250px] md:min-h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.meesho.com/images/marketing/1751439021433.webp"
        alt="Sale Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ minHeight: '250px', maxHeight: '534px' }}
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
      {/* Content (centered, responsive) */}
      <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8">
        {/* Left: Offer Only (no Sale Card) */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2">
          <div className="mt-2 flex flex-col items-center md:items-start">
          </div>
        </div>
        {/* Right: Info & CTA */}
        <div className="flex flex-col items-center md:items-end w-full md:w-1/2 mt-8 md:mt-0 gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow">Smart Shopping</h2>
          <p className="text-lg md:text-xl text-white font-medium drop-shadow">Trusted by Millions</p>
          <button className="mt-3 bg-white text-purple-800 px-8 py-2 rounded-lg hover:bg-gray-200 font-bold shadow transition">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
