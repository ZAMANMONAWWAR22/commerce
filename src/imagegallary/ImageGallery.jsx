import React, { useState } from 'react'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import image5 from '../assets/images/image5.jpg'

const ImageGallery = () => {

    const [currentImage, setCurrentImage] = useState(image1);
    const [currentIndex, setCurrentIndex] = useState(0);
const images = [image1, image2, image3, image4, image5];
   

const nextImage = () => {
    setCurrentIndex(currentIndex + 1)
    if (currentIndex > images.length - 1) {
        setCurrentIndex(0)   
        return    
    }       
       setCurrentImage(images[currentIndex])
    }

    const previousImage = () => {
           setCurrentIndex(currentIndex - 1)
    if (currentIndex <0) {
        setCurrentIndex(4)   
        return    
    }       
       setCurrentImage(images[currentIndex])
    
    }

  return (
    <>
    <h1 className='text-5xl mb-5 text-center'>Image slider</h1>
    <div className="relative ">
        
        <i className="fa-regular fa-circle-right absolute -right-12 top-28 text-4xl cursor-pointer"
        onClick={()=>nextImage()}
        ></i>
        <img src={currentImage} alt="" width="400px" height="300px" className='rounded-3xl' />
        <i className="fa-regular fa-circle-left absolute -left-12 top-28 text-4xl cursor-pointer" 
        onClick={()=>previousImage()}
        ></i>
    </div>
    </>
  )
}

export default ImageGallery