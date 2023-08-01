/* eslint-disable react/prop-types */
import { useGlobalContext } from '../../Context';
import styles from './CartProductCard.module.css';

const CartProductCard = ({ product }) => {
  const { cartProducts, setCartProducts } = useGlobalContext();

  //! --- Functions

  const handlePlusClick = (product) => {
    const newArray = cartProducts.map((product2) => {
      if (product2.name === product.name) {
        return { ...product2, quantity: product2.quantity + 1 };
      } else {
        return product2;
      }
    });

    setCartProducts(newArray);
  };
  // ---
  const handleMinusClick = (product) => {
    const newArray = cartProducts.map((product2) => {
      if (product2.name === product.name) {
        if (product2.quantity === 1) {
          // Se a quantidade é 1, não inclua o produto no novo array (remover)
          return [];
        }
        return { ...product2, quantity: product2.quantity - 1 };
      } else {
        return product2;
      }
    });

    // Atualizar o estado do carrinho com o novo array (sem usar o filter)
    setCartProducts(newArray.flat());
  };
  //! --- Functions

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
        <button onClick={() => handleMinusClick(product)} className="minus">
          -
        </button>
        <p className={styles.product_quantity}>{product.quantity}</p>
        <button onClick={() => handlePlusClick(product)} className="plus">
          +
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
