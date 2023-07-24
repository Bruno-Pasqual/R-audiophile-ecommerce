import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Footer/Footer';

const products = () => {
  return (
    <div className="products-container">
      <Navbar />
      {<Outlet />}
      <Footer />
    </div>
  );
};

export default products;
