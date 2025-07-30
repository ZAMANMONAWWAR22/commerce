import React, { useState, useEffect } from 'react'
import Dropdown from '../component/Dropdown';

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data.products);
      });
  }, []);

  return (
    <>
      <div className='text-2xl font-bold m-5 ml-10'>Products For You</div>
      <div className='flex flex-row items-start justify-center bg-blue-600 h-full w-[95%] m-auto'>
               <div className='flex-1 h-full bg-white flex flex-col items-start justify-start'>
        <Dropdown/>
        
        </div>
        <div className='flex-3 h-full bg-white justify-center items-center flex flex-wrap gap-4 p-4'>
          {data.map((item) => (
            <a href={`/product/${item.id}`} key={item.id} className="no-underline text-black">
              <div className="w-80 h-[370px] bg-white cursor-pointer p-0 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col relative overflow-hidden border-[1px] border-gray-300 items-start">
                <img src={item.thumbnail} alt={item.title} className="w-full h-64 object-cover rounded-t-lg  bg-blue-200" />
                <div className=" w-full bg-gradient-to-t from-white/90 via-white/70 to-transparent p-4 flex flex-col">
                  <h2 className="text-[18px] font-normal text-gray-500">{item.title.slice(0,28)} {item.title.length>28?'...':''} </h2>
<div>{item.category}</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-blue-600"> ₹{Math.round(item.price*84)}</span>
                    <span className="text-sm text-red-500">-{item.discountPercentage}%</span>
                  </div>
                  <div className="mt-1 text-sm text-yellow-500">⭐ {item.rating} / 5</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Shop