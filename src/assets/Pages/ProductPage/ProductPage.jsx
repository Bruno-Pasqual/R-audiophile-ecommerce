import { Outlet } from 'react-router-dom';
import BringingContainer from '../../Components/BringingContainer/bringingContainer';
import CategoryContainer from '../../Components/CategoryContainer/CategoryContainer';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Home/Navbar/Navbar';

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      {<Outlet />}
      <CategoryContainer />
      <BringingContainer />
      <Footer />
    </div>
  );
};

export default ProductPage;
