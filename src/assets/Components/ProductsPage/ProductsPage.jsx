/* eslint-disable react/prop-types */
import { useGlobalContext } from '../../Context';
import ProductCard from './ProductCard/ProductCard';
/* import styles from './ProductsPage.module.css'; */
import { nanoid } from 'nanoid';
import './ProductsPage.css';

const ProductsPage = ({ categoryName }) => {
  //Using
  const { data } = useGlobalContext();

  //finding products that match the passed category
  const correspondingArray = data.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="products_page ativo">
      <header className="category_page_header">{categoryName}</header>
      <div className="cards_container">
        {correspondingArray.map((product) => (
          <ProductCard product={product} key={nanoid()} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
