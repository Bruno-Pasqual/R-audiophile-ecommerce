import BringingContainer from '../../Components/BringingContainer/bringingContainer';
import CategoryContainer from '../../Components/CategoryContainer/CategoryContainer';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Home/Navbar/Navbar';
import ProductsDisplay from '../../Components/ProductsDisplay/ProductsDisplay';

const XX99_mark_two = () => {
  return (
    <div style={{ color: 'black' }}>
      <Navbar />
      <ProductsDisplay />
      <CategoryContainer />
      <BringingContainer />
      <Footer />
    </div>
  );
};

export default XX99_mark_two;
