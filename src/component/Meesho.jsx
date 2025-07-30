// src/CategoryNavigation.js
import React from 'react';

const categories = [
  { name: 'Ethnic Wear', image: 'https://images.meesho.com/images/marketing/1744634654837.webp' }, // Replace with actual image paths
  { name: 'Western Dresses', image: 'https://images.meesho.com/images/marketing/1744634725496.webp' },
  { name: 'Men\'s Wear', image: 'https://images.meesho.com/images/marketing/1744634780426.webp' },
  { name: 'Footwear', image: 'https://images.meesho.com/images/marketing/1744634814643.webp' },
  { name: 'Home Decor', image: 'https://images.meesho.com/images/marketing/1744634835018.webp' },
  { name: 'Beauty', image: 'https://images.meesho.com/images/marketing/1744634871107.webp' },
  { name: 'Accessories', image: 'https://images.meesho.com/images/marketing/1744634909968.webp' },
  { name: 'Grocery', image: 'https://images.meesho.com/images/marketing/1744634937295.webp' },
];

const CategoryNavigation = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      {/* Feature Row with pink background */}
      <div className="w-full h-22 flex justify-center bg-pink-50">
        <div className="flex gap-10 justify-center bg-white border border-pink-200 rounded-xl mt-4 mb-4 w-[98%]">
          <div className="styles__FeatureItem-sc-2pt7ax-5 kwIMZc flex items-center gap-1 ">
            <img src="https://www.meesho.com/assets/Icons/returns.svg" className="styles__FeatureIcon-sc-2pt7ax-6 kzhBoo w-6 h-6" />
            <span className="styles__FeatureText-sc-2pt7ax-7 bXOsoB text-1xl font-semibold">7 Days Easy Return</span>
          </div>
          <div className="w-px h-6 bg-pink-200 mx-2 self-center"></div>
          <div className="styles__FeatureItem-sc-2pt7ax-5 kwIMZc flex items-center gap-1">
            <img src="https://www.meesho.com/assets/Icons/cod.svg" className="styles__FeatureIcon-sc-2pt7ax-6 kzhBoo w-6 h-6" />
            <span className="styles__FeatureText-sc-2pt7ax-7 bXOsoB text-1xl font-semibold">Cash on Delivery</span>
          </div>
          <div className="w-px h-6 bg-pink-200 mx-2 self-center"></div>
          <div className="styles__FeatureItem-sc-2pt7ax-5 kwIMZc flex items-center gap-1">
            <img src="https://www.meesho.com/assets/Icons/lowest-price.svg" className="styles__FeatureIcon-sc-2pt7ax-6 kzhBoo w-6 h-6" />
            <span className="styles__FeatureText-sc-2pt7ax-7 bXOsoB text-1xl font-semibold">Lowest Prices</span>
          </div>
        </div>
      </div>

      {/* Category Grid with white background */}
      <div className="w-full bg-white flex justify-center ">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 bg-white lg:gap-8 w-fit mt-14 mb-5 rounded">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center cursor-pointer hover:-translate-y-1 transition-transform duration-200">
              <div className="w-[165px] h-[165px] rounded-full flex items-center justify-center mb-5 shadow-sm">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium whitespace-nowrap text-1xl mb-10">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation; 