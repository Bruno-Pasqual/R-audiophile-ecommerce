/* eslint-disable react/prop-types */
import { useGlobalContext } from '../../Context';
import { nanoid } from 'nanoid';
import './SummaryContainer.css';

const SummaryContainer = () => {
  const { cartProducts } = useGlobalContext();
  const totalValue = cartProducts.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);

  console.log(totalValue);

  return (
    <div className="summary_container">
      <h2>Summary</h2>
      <div className="cards_container">
        {cartProducts.map((product) => {
          return <SummaryCard product={product} key={nanoid()} />;
        })}
      </div>
      <div className="total_container">
        <div className="summary_line">
          <p className="tag">Total</p>
          <p className="value">${totalValue.toLocaleString()}</p>
        </div>
        <div className="summary_line">
          <p className="tag">Shipping</p>
          <p className="value">${50}</p>
        </div>
        <div className="summary_line">
          <p className="tag">Vat(included)</p>
          <p className="value">${(totalValue * 0.1).toLocaleString()}</p>
        </div>
        <div className="summary_line">
          <p className="tag">grand total</p>
          <p className="value last_value">
            ${(totalValue + 50).toLocaleString()}
          </p>
        </div>
      </div>
      <button className="continue_btn">Continue e pay</button>
    </div>
  );
};

export default SummaryContainer;

const SummaryCard = ({ product }) => {
  return (
    <div className="summary_card">
      <img className="product_img" src={product.product.image.tablet} alt="" />
      <div className="details_container">
        <p className="product_title">{product.name.split(' ')[0]}</p>
        <p className="product_price">{`$ ${product.price.toLocaleString()}`}</p>
      </div>
      <p className="product_quantity">{`x${product.quantity}`}</p>
    </div>
  );
};
