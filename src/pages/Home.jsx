import React from 'react'
import StylePopularBrand from '../component/StylePopularBrand'
import SaleBanner from '../component/SaleBanner'
<<<<<<< HEAD

const Home = () => {
  return (
    <div className='text-9xl text-gray-700'>
    <SaleBanner />
    <StylePopularBrand />
=======
import OriginalBrands from '../component/OriginalBrands'
import OriginalBrands2 from '../component/OriginalBrands2'
import Card3 from '../component/card3'
const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-300 h-full w-full'>
      {/* <Card/> */}
      {/* <Card2/>       */}
      {/* <ImageGallery/> */}
      {/* <HerpPage/> */}
        <SaleBanner/>
      <Meesho/>
      {/* <Meesho2 /> */}
      <OriginalBrands/>
      <OriginalBrands2/>
      {/* <Card3/> */}
    

>>>>>>> dec1f9e2191061e80df148bfb84561d6b9554439
    </div>
  )
}
export default Home