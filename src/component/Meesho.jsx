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
    <div className=" flex flex-col justify-center items-center w-screen h-screen py-8 bg-white shadow-md rounded-lg" >
      
        <div className=" flex gap-4 items-center w-[90%] bg-pink-100 justify-center rounded-l" >
          <div className="styles__FeatureItem-sc-2pt7ax-5 kwIMZc flex items-center gap-2">
            <img src="https://www.meesho.com/assets/Icons/returns.svg" className="styles__FeatureIcon-sc-2pt7ax-6 kzhBoo" />
            <span className="styles__FeatureText-sc-2pt7ax-7 bXOsoB">7 Days Easy Return</span>
          </div>
         <div class="w-px h-6 bg-gray-300"></div>
          <div className="styles__FeatureItem-sc-2pt7ax-5 kwIMZc flex items-center gap-2">
            <img src="https://www.meesho.com/assets/Icons/cod.svg" className="styles__FeatureIcon-sc-2pt7ax-6 kzhBoo" />
            <span className="styles__FeatureText-sc-2pt7ax-7 bXOsoB">Cash on Delivery</span>
          </div>
          <div class="w-px h-6 bg-gray-300"></div>
          <div className="styles__FeatureItem-sc-2pt7ax-5 kwIMZc flex items-center gap-2">
            <img src="https://www.meesho.com/assets/Icons/lowest-price.svg" className="styles__FeatureIcon-sc-2pt7ax-6 kzhBoo" />
            <span className="styles__FeatureText-sc-2pt7ax-7 bXOsoB">Lowest Prices</span>
          </div>

        </div>
     
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 lg:gap-8">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center cursor-pointer hover:-translate-y-1 transition-transform duration-200">
            <div className="w-[150px] h-[150px] rounded-full  flex items-center justify-center mb-2 shadow-sm">
              {/* Replace with your actual image paths */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-700 text-sm font-medium whitespace-nowrap">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavigation; 