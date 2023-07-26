/* eslint-disable react/prop-types */
import styles from './ProductCard.module.css';
import Button from '../../Button/Button';

const ProductCard = ({ product }) => {
  console.log(product);

  const { image, name, new: novo, description } = product;

  return (
    <div className={styles.product_card}>
      <img className={styles.image_container} src={image.desktop} alt="" />
      <div className={styles.details_container}>
        {novo && <p className={styles.new_tag}>New product</p>}
        <p className={styles.product_title}>{name}</p>
        <p className={styles.product_details}>{description}</p>
        <Button background="#D87D4A" border="none" color="white" />
      </div>
    </div>
  );
};

export default ProductCard;
