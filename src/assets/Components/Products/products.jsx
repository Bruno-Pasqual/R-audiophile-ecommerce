import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';

const products = () => {
  return (
    <div>
      <Navbar />
      {<Outlet />}
    </div>
  );
};

export default products;
