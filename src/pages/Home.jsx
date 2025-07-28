
import SaleBanner from '../component/SaleBanner';
import StylePopularBrand from '../component/StylePopularBrand';
import Meesho2 from '../component/Meesho2';
import Meesho from '../component/Meesho';
import OriginalBrands from '../component/OriginalBrands';
import OriginalBrands2 from '../component/OriginalBrands2';
import Small from '../component/Small';


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-blue-300 w-full'>
  
    <SaleBanner />
      <Meesho />
      <OriginalBrands />
      <OriginalBrands2 />
      <StylePopularBrand />
      <Meesho2 />
    </div>
  );
};

export default Home;