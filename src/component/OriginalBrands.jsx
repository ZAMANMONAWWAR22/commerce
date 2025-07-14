import React, { useState } from "react";
const items = [
  { image: "https://images.meesho.com/images/marketing/1744635542873.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635521751.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635497001.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635464683.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635432891.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635402151.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635614888.webp" },
  {image:  "https://images.meesho.com/images/marketing/1744635646070.webp"}
];

const VISIBLE_COUNT = 5;

const OriginalBrands = () => {
  const [startIdx, setStartIdx] = useState(0);
  const endIdx = startIdx + VISIBLE_COUNT;
  const canScrollLeft = startIdx > 0;
  const canScrollRight = endIdx < items.length;

  const scrollLeft = () => {
    if (canScrollLeft) setStartIdx(startIdx - 1);
  };
  const scrollRight = () => {
    if (canScrollRight) setStartIdx(startIdx + 1);
  };

  return (
    <div className="relative p-1  w-[99%] rounded-md hidden bg-amber-600 xl:block ">
      <div className="flex justify-between items-center mb-5  mt-5">
        <h2 className="text-lg font-semibold">Original Brands ✔ </h2>
        <a href="#" className="hidden md:flex items-center gap-1 text-purple-600 text-sm ">
          View All
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </a>
      </div>

      {/* Scroll buttons */}
      <button onClick={scrollLeft} disabled={!canScrollLeft} className={`hidden md:block absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow p-1 rounded-full ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}>
        {/* Left Arrow SVG */}
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button onClick={scrollRight} disabled={!canScrollRight} className={`hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow p-1 rounded-full ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}>
        {/* Right Arrow SVG */}
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>

      {/* Slides */}
      <div className="flex gap-3 justify-center items-center mt-1 mb-1">
        {items.slice(startIdx, endIdx).map((item, i) => (
          <div key={startIdx + i} className="min-w-[90px]  p-1 ">
            <img src={item.image} className="w-80 h-80 object-contain" alt={`Brand ${startIdx + i + 1}`} />

          </div>
        ))}
      </div>
    </div>
  );
};

export default OriginalBrands;
