import { useState } from 'react';

import React from 'react'

const Navbar = () => {
    const [search, setSearch] = useState('');
  return (
     <nav className="bg-blue-100 px-6 py-4 flex items-center justify-between w-full">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png" alt="Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-gray-800">ShopEase</span>
      </div>

      {/* Search Bar */}
      {/* <div className="flex-1 max-w-md mx-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div> */}

      <div className="flex gap-4 items-center font-semibold text-gray-700 hidden xl:flex">
          <div className='cursor-pointer hover:text-amber-700'><a href='/'>HOME</a></div>
        <div className='cursor-pointer hover:text-amber-700'>MEN</div>
          <div className='cursor-pointer hover:text-amber-700'>WOMEN</div>
            <div className='cursor-pointer hover:text-amber-700'><a href='/kids'>KIDS</a></div>
            
                <div className='cursor-pointer hover:text-amber-700'>BEAUTY</div>
                  <div className='cursor-pointer hover:text-amber-700'>GENZ</div>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="text-gray-700 font-medium">monawwar</span>
        <div className='xl:hidden'><i className="fa-solid fa-bars "></i></div>
      </div>
    </nav>
  )
}

export default Navbar


