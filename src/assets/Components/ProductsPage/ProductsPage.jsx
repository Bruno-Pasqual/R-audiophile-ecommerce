/* eslint-disable react/prop-types */
import { useGlobalContext } from '../../Context';
import ProductCard from './ProductCard/ProductCard';
import styles from './ProductsPage.module.css';
import { nanoid } from 'nanoid';

const ProductsPage = ({ categoryName }) => {
  //Using
  const { data } = useGlobalContext();

  //finding products that match the passed category
  const correspondingArray = data.filter(
    (product) => product.category === categoryName
  );
  console.log(correspondingArray);

  return (
    <div className={styles.products_page}>
      <header className={styles.category_page_header}>{categoryName}</header>
      <div className={styles.cards_container}>
        {correspondingArray.map((product) => (
          <ProductCard product={product} key={nanoid()} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
