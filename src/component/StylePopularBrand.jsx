import React from "react";

const brandImages = [
  "https://images.meesho.com/images/marketing/1743159302944.webp",
  "https://images.meesho.com/images/marketing/1743159322237.webp",
  "https://images.meesho.com/images/marketing/1743159363205.webp",
  "https://images.meesho.com/images/marketing/1743159377598.webp",
  "https://images.meesho.com/images/marketing/1743159393231.webp",
  "https://images.meesho.com/images/marketing/1743159415385.webp",
  "https://images.meesho.com/images/marketing/1744636558884.webp",
  "https://images.meesho.com/images/marketing/1744636599446.webp",
];

const StylePopularBrand = () => {
  return (
    <div className="w-full bg-[#ddcff6] py-4 overflow-hidden">
      <div className="relative w-full h-[135px] flex items-center">
        <div className="marquee-track flex gap-6 items-center">
          {[...brandImages, ...brandImages].map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-60 h-30 bg-white shadow p-2 flex items-center justify-center rounded-lg">
              <img src={src} alt="Popular Brands" className="w-full h-[90%] object-contain" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .marquee-track {
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default StylePopularBrand;
