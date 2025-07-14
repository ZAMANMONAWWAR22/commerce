import React from 'react'
import StylePopularBrand from '../component/StylePopularBrand'
import SaleBanner from '../component/SaleBanner'

const Home = () => {
  return (
    <div className='text-9xl text-gray-700'>
    <SaleBanner />
    <StylePopularBrand />
    </div>
  )
}
export default Home