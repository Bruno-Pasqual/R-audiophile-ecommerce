import BringingContainer from '../../Components/BringingContainer/bringingContainer';
import CategoryContainer from '../../Components/CategoryContainer/CategoryContainer';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Home/Navbar/Navbar';
import ProductsDisplay from '../../Components/ProductsDisplay/ProductsDisplay';

const ZX9_speaker = () => {
  return (
    <div>
      <Navbar />
      <ProductsDisplay />
      <CategoryContainer />
      <BringingContainer />
      <Footer />
    </div>
  );
};

export default ZX9_speaker;
