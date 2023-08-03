/* eslint-disable react/prop-types */
import './PaymentContainer.css';

import { nanoid } from 'nanoid';

const PaymentContainer = ({ input, setInput }) => {
  const handleClick = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className="payment_method_container">
      <div className={input === 'first' ? 'line ativo' : 'line'}>
        <input
          type="radio"
          name="payment_method"
          id={nanoid()}
          onClick={handleClick}
          value="first"
        />
        <label htmlFor={``}>e-Money</label>
      </div>
      <div className={input === 'second' ? 'line ativo' : 'line'}>
        <input
          type="radio"
          name="payment_method"
          id={nanoid()}
          onClick={handleClick}
          value="second"
        />
        <label htmlFor={``}>Cash on Delivery</label>
      </div>
    </div>
  );
};

export default PaymentContainer;
