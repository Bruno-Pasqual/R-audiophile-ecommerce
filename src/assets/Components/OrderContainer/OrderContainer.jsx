/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useGlobalContext } from '../../Context';
import './OrderContainer.css';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';

const OrderContainer = ({ totalValue }) => {
  const { cartProducts, setCartProducts } = useGlobalContext();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="dialog_container">
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <circle fill="#D87D4A" cx="32" cy="32" r="32" />
          <path
            stroke="#FFF"
            strokeWidth="4"
            d="m20.754 33.333 6.751 6.751 15.804-15.803"
          />
        </g>
      </svg>
      <h3 className="order_title">Thank you for your order</h3>
      <p className="order_text">
        You will receive an email confirmation shortly
      </p>
      <div className="products_container">
        <div className="left_wrapper">
          <div className="cards_container">
            {showMore &&
              cartProducts.map((product) => {
                return <OrderCard product={product} key={nanoid()} />;
              })}
            {!showMore && (
              <OrderCard product={cartProducts[0]} key={nanoid()} />
            )}
          </div>
          {cartProducts.length > 1 && (
            <button
              className="show_btn"
              onClick={() =>
                setShowMore((current) => {
                  return !current;
                })
              }
            >
              {showMore
                ? 'Show less'
                : `and ${cartProducts.length - 1} other item(s)`}
            </button>
          )}
        </div>
        <div className="grand_total_container">
          <p className="grand_title">Grand Total</p>
          <p className="grand_price">$ {totalValue.toLocaleString()}</p>
        </div>
      </div>

      <NavLink to={'/R-audiophile-ecommerce/'}>
        <button onClick={() => setCartProducts([])} className="back_home_btn">
          Back to home
        </button>
      </NavLink>
    </div>
  );
};

export default OrderContainer;

const OrderCard = ({ product }) => {
  return (
    <div className="order_card">
      <img src={product.product.image.tablet} alt="" />
      <div className="details_container">
        <p className="product_title">{product.name.split(' ')[0]}</p>
        <p className="product_price">{`$ ${product.price.toLocaleString()}`}</p>
      </div>
      <p className="product_quantity">{`x${product.quantity}`}</p>
    </div>
  );
};
