import React from 'react'
import Card from '../component/Card'
import Card2 from '../component/card2'
import ImageGallery from '../imagegallary/ImageGallery'
import HerpPage from '../component/HerpPage'
import Meesho from '../component/Meesho'
import Meesho2 from '../component/Meesho2'
import SaleBanner from '../component/SaleBanner'

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
    

    </div>
  )
}
export default Home