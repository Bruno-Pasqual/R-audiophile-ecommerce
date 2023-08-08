import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Footer/Footer';
import BringingContainer from '../BringingContainer/bringingContainer';
import CategoryContainer from '../CategoryContainer/CategoryContainer';

const products = () => {
  window.scrollTo(0, 0);

  return (
    <div className="products-container">
      <Navbar />
      {<Outlet />}
      <CategoryContainer />
      <BringingContainer />
      <Footer />
    </div>
  );
};

export default products;
