import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/Components/Home/Home';
import Products from './assets/Components/Products/products';
import HeadPhones from './assets/Components/Headphones/HeadPhones';
import Earphones from './assets/Components/Earphones/Earphones';
import Speakers from './assets/Components/Speakers/Speakers';
import ZX7_speaker from './assets/Pages/ZX7_speaker/ZX7_speaker';
import ZX9_speaker from './assets/Pages/ZX9_speaker/ZX9_speaker';
import YX1_earphones from './assets/Pages/YX1_earphones/YX1_earphones';
import XX99_mark_one from './assets/Pages/xx99-mark-one/XX99_mark_one';
import XX99_mark_two from './assets/Pages/xx99-mark-two/XX99_mark_two';
import XX59_headphones from './assets/Pages/xx59/XX59_headphones';
import CheckoutPage from './assets/Pages/CheckoutPage/CheckoutPage';

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
          <Route
            path="/R-audiophile-ecommerce/products/headphones/xx99-mark-one-headphones"
            element={<XX99_mark_one />}
          />
          <Route
            path="/R-audiophile-ecommerce/products/headphones/xx99-mark-two-headphones"
            element={<XX99_mark_two />}
          />
          <Route
            path="/R-audiophile-ecommerce/products/headphones/xx59-headphones"
            element={<XX59_headphones />}
          />
          <Route
            path="/R-audiophile-ecommerce/products/speakers/zx7-speaker"
            element={<ZX7_speaker />}
          />
          <Route
            path="/R-audiophile-ecommerce/products/speakers/zx9-speaker"
            element={<ZX9_speaker />}
          />

          <Route
            path="/R-audiophile-ecommerce/products/earphones/yx1-earphones"
            element={<YX1_earphones />}
          />
          <Route
            path="/R-audiophile-ecommerce/products/checkout"
            element={<CheckoutPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//xx99-mark-one-headphones
export default App;
