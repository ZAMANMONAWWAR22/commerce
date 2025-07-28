import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {

const [item, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.id);
        setItem(data);
    });
  }, [id]);

console.log(item.images)

  return (
    <div className=''> 

     <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6 my-6 grid grid-cols-1 md:grid-cols-2 gap-8">
     {/* Left: Other images vertically at top-left, thumbnail to right */}
     <div className="flex flex-row items-start">
       <div className="flex flex-col gap-2">
         {Array.isArray(item.images) && item.images.length > 0 && item.images
           .filter(img => img !== item.thumbnail)
           .map((img) => (
             <img key={img} src={img} alt={img} className="w-25 h-25 mr-6 object-cover " />
           ))}
       </div>
       {item.thumbnail && (
         <img
           src={item.thumbnail}
           alt={item.title}
           className="w-100 h-120 rounded-xl border "
         />
       )}

     </div>

     {/* Right: Details on top, */}
     <div className="flex flex-col items-center">
       <div className="space-y-4 w-full mb-6">
         <h1 className="text-2xl font-bold">{item.title || ''}</h1>
         <p className="text-sm text-gray-500">Brand: <span className="font-medium text-gray-700">{item.brand || ''}</span></p>
         <p className="text-gray-700">{item.description || ''}</p>

         {/* Price & Discount */}
         <div className="flex items-center gap-4 mt-2">
           <span className="text-2xl font-bold text-blue-600">₹{item.price ? Math.round(item.price*84) : ''}</span>
           <span className="text-sm line-through text-gray-400">
             ₹{item.price && item.discountPercentage ? Math.round((item.price / (1 - item.discountPercentage / 100)) * 84) : ''}
           </span>
           <span className="text-green-600 font-semibold">
             {item.discountPercentage ? `${item.discountPercentage}% off` : ''}
           </span>
         </div>

         <p className="text-yellow-500">⭐ {item.rating ? `${item.rating} / 5` : ''}</p>
         <p className="text-green-700">{item.availabilityStatus || ''}</p>
         <p className="text-sm text-gray-600">Stock left: {item.stock || ''}</p>

         {/* Additional Info */}
         <div className="bg-gray-50 p-4 rounded-xl mt-4 space-y-2">
           <p><strong>Category:</strong> {item.category}</p>
           {/* <p><strong>Tags:</strong> {item.tags.join(', ')}</p> */}
           <p><strong>Shipping:</strong> {item.shippingInformation}</p>
           <p><strong>Warranty:</strong> {item.warrantyInformation}</p>
           <p><strong>Return Policy:</strong> {item.returnPolicy}</p>
           <p><strong>Min Order Quantity:</strong> {item.minimumOrderQuantity}</p>
           {/* <p><strong>Dimensions:</strong> {item.dimensions.width} x {item.dimensions.height} x {item.dimensions.depth} cm</p> */}
           <p><strong>Weight:</strong> {item.weight}g</p>
           {/* <img src={item.meta.qrCode} alt="QR Code" className="w-20 mt-2" /> */}
         </div>

         {/* Reviews */}
         <div className="mt-6">
           <h3 className="text-lg font-semibold">Reviews:</h3>
           <div className="space-y-2">
             {/* {item.reviews.map((review, idx) => (
               <div key={idx} className="border-b pb-2">
                 <p className="text-sm text-gray-600">⭐ {review.rating} - {review.comment}</p>
                 <p className="text-xs text-gray-400">By {review.reviewerName}</p>
               </div>
             ))} */}
           </div>
         </div>
       </div>
     </div>
    </div>
    </div>
  )
}

export default ProductPage





