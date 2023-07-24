import { useGlobalContext } from '../../Context';
import Navbar from './Navbar/Navbar';

const Home = () => {
  const values = useGlobalContext();
  console.log(values);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
