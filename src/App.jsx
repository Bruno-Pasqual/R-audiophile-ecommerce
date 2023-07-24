import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/Components/Home/Home';
import Products from './assets/Components/Products/products';
import HeadPhones from './assets/Components/Headphones/HeadPhones';
import Earphones from './assets/Components/Earphones/Earphones';
import Speakers from './assets/Components/Speakers/Speakers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/R-audiophile-ecommerce" element={<Home />} />
          <Route path="/R-audiophile-ecommerce/products" element={<Products />}>
            <Route path="headphones" element={<HeadPhones />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="earphones" element={<Earphones />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
