import React from 'react';


const GoldBanner = () => {
  return (
    <div
      className="relative flex flex-col items-start justify-center w-[100%] h-[690px]"
      style={{
        backgroundImage: 'url(https://images.meesho.com/images/marketing/1744698265981.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Shop Now Button */}
      <button className="absolute left-54 bottom-20 w-63 h-20 bg-yellow-950 text-yellow-600 font-medium border-2 border-yellow-600 rounded-lg shadow-lg text-3xl cursor-pointer">
        Shop Now
      </button>



      {/* Right Section Overlayed */}
      <div className="absolute top-1/2 right-25 -translate-y-1/2 flex flex-col items-center gap-17 ">
        <div className="flex flex-row gap-5">
          <img src="https://images.meesho.com/images/marketing/1744722796811.webp" className="w-55 h-55 object-contain cursor-pointer transition-transform duration-200 hover:-translate-y-2" alt="Lehengas" />
          <img src="https://images.meesho.com/images/marketing/1744635113661.webp" className="w-55 h-55 object-contain cursor-pointer transition-transform duration-200 hover:-translate-y-2" alt="Menwear" />
        </div>
        <div className="flex flex-row gap-5">
          <img src="https://images.meesho.com/images/marketing/1744635139351.webp" className="w-55 h-55 object-contain cursor-pointer transition-transform duration-200 hover:-translate-y-2" alt="Sarees" />
          <img src="https://images.meesho.com/images/marketing/1744635189897.webp" className="w-55 h-55 object-contain cursor-pointer transition-transform duration-200 hover:-translate-y-2" alt="Jewellery" />
        </div>
      </div>
    </div>
  );
}

export default GoldBanner;
