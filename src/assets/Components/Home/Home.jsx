// import { useGlobalContext } from '../../Context';
import BringingContainer from '../BringingContainer/bringingContainer';
import CategoryContainer from '../CategoryContainer/CategoryContainer';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import HighlightsContainer from '../HighlightsContainer/HighlightsContainer';
import Navbar from './Navbar/Navbar';

const Home = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <CategoryContainer />
        <HighlightsContainer />
      </main>
      <BringingContainer />
      <Footer />
    </div>
  );
};

export default Home;
