import { useGlobalContext } from '../../Context';
import styles from './ProductsDisplay.module.css';

const ProductsDisplay = () => {
  const { selectedProduct } = useGlobalContext();
  console.log(selectedProduct);
  const {
    new: novo,
    name,
    description,
    price,
    features,
    includes,
    gallery,
    others,
    image,
  } = selectedProduct;
  console.log(image);

  return (
    <div className={styles.display_container}>
      <img
        className={styles.header_image}
        src={'/assets/product-yx1-earphones/mobile/image-product.jpg'}
        alt={`image of the product ${name}`}
      />
    </div>
  );
};

export default ProductsDisplay;
