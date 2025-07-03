// src/CategoryNavigation.js
import React from 'react';

const categories = [
  { name: 'Ethnic Wear', image: 'https://st1.bollywoodlife.com/wp-content/uploads/2024/06/Ethnic-Wear-for-Women.jpg?impolicy=Medium_Widthonly&w=412&h=290' }, // Replace with actual image paths
  { name: 'Western Dresses', image: 'https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/cotton-one-side-pocket-western-wear-dress-263.jpg' },
  { name: 'Men\'s Wear', image: 'https://www.apetogentleman.com/wp-content/uploads/2019/05/casual-dressing-tips1.jpg' },
  { name: 'Footwear', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { name: 'Home Decor', image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/YZ/US/JC/81519322/home-decor-service.jpg' },
  { name: 'Beauty', image: 'https://media.licdn.com/dms/image/v2/D4E12AQEnTrDYLCBAlA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690298374715?e=2147483647&v=beta&t=MhT_71rse5rmyKd98YNDhsF_XsG2YNLqbodLjO84fn0' },
  { name: 'Accessories', image: 'https://maisoli.in/cdn/shop/files/2_2775676b-7c9f-437d-a2c8-ff1a4d546827.jpg?v=1742798439&width=1445' },
  { name: 'Grocery', image: 'https://hips.hearstapps.com/hmg-prod/images/6517a7bd-0057-43c0-961e-1f14d5a6eaaf-1657946161.jpeg?crop=0.8786741713570981xw:1xh;center,top&resize=1200:*' },
];

const CategoryNavigation = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-white shadow-md rounded-lg mx-auto max-w-7xl">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 lg:gap-8">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center cursor-pointer hover:scale-106 transition-transform duration-200">
            <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 mb-2 shadow-sm">
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