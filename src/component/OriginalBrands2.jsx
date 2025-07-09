import React, { useState } from "react"

const items = [
  { image: "https://images.meesho.com/images/marketing/1744635542873.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635521751.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635497001.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635464683.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635432891.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635402151.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635614888.webp" },
  { image: "https://images.meesho.com/images/marketing/1744635646070.webp" },
];

const VISIBLE_COUNT = 2;

const OriginalBrands2 = () => {
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
    <div className="w-[375px] max-w-full p-1 sm:p-10 md:p-5 relative bg-white shadow sm:block xl:hidden">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-2 mt-2">Original Brands ✔ </h2>
        <a href="#" className="flex items-center gap-1 text-purple-600 text-sm">
          View All
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </a>
      </div>
      <div className="flex w-full gap-6 sm:gap-8 md:gap-10 relative transition-all duration-300 overflow-x-auto">
        {items.slice(startIdx, endIdx).map((item, idx) => (
          <div key={idx} className="flex-1 max-w-[50%] text-center flex-shrink-0">
            <img src={item.image} alt={item.label} className="w-full h-auto mx-auto object-contain" />
            <p className="text-xs sm:text-sm mt-0 text-purple-700">{item.label}</p>
          </div>
        ))}
      </div>
      {/* Scroll buttons */}
      <button onClick={scrollLeft} disabled={!canScrollLeft} className={`absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow p-1 rounded-full z-10 ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}>
        {/* Left Arrow SVG */}
        <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button onClick={scrollRight} disabled={!canScrollRight} className={`absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow p-1 rounded-full z-10 ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}>
        {/* Right Arrow SVG */}
        <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  )
}

export default OriginalBrands2
