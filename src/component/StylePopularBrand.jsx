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
    <div className="w-full bg-white py-4 overflow-hidden">
      <div className="relative w-full">
        <div className="marquee-track flex gap-6">
          {[...brandImages, ...brandImages].map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-24 h-24 bg-white rounded-lg shadow p-2 flex items-center justify-center">
              <img src={src} alt="Popular Brands" className="w-full h-full object-contain" />
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
