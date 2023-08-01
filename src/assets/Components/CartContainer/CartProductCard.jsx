/* eslint-disable react/prop-types */
import styles from './CartProductCard.module.css';

const CartProductCard = ({ product }) => {
  return (
    <div className={styles.cart_product_card}>
      <img
        src={`../${product.product.image.tablet}`}
        alt=""
        className={styles.product_img}
      />
      <div className="details_container">
        <p className={styles.product_title}>{product.name.split(' ')[0]}</p>
        <p className={styles.product_price}>$ {product.price}</p>
      </div>
      <div className={styles.quantity_container}>
        <button className="minus">-</button>
        <p className={styles.product_quantity}>{product.quantity}</p>
        <button className="plus">+</button>
      </div>
    </div>
  );
};

export default CartProductCard;
