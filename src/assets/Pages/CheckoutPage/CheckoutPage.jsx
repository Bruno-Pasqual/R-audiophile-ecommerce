import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Home/Navbar/Navbar';
import InputContainer from '../../Components/InputContainer/InputContainer';
import PaymentContainer from '../../Components/PaymentContainer/PaymentContainer';
import './CheckoutPage.css';
import SummaryContainer from '../../Components/summaryCard/SummaryContainer';

const CheckoutPage = () => {
  const [input, setInput] = useState(null);

  return (
    <div style={{ background: '#FAFAFA' }}>
      <Navbar />
      <div className="checkoutPage">
        <form action="">
          <h2>CHECKOUT</h2>
          <div className="billing_details_container">
            <h4 className="container_title">Billing details</h4>
            <div className="inputs_container">
              <InputContainer
                titleText={'Name'}
                inputType={'text'}
                placeHolderText="Alexei Ward"
              />
              <InputContainer
                titleText={'Email Address'}
                inputType={'email'}
                placeHolderText="alexei@gmail.com"
              />
              <InputContainer
                titleText={'Phone number'}
                inputType={'number'}
                placeHolderText="1 202-555-0136"
              />
            </div>
          </div>
          <div className="billing_details_container">
            <h4 className="container_title">Shipping info</h4>
            <div className="inputs_container">
              <InputContainer
                titleText={'Your Address'}
                inputType={'text'}
                placeHolderText="Williams Avenue"
              />
              <InputContainer
                titleText={'Number'}
                inputType={'email'}
                placeHolderText="518"
              />
              <InputContainer
                titleText={'City'}
                inputType={'text'}
                placeHolderText="New York"
              />
              <InputContainer
                titleText={'Country'}
                inputType={'text'}
                placeHolderText="United States"
              />
            </div>
          </div>
          <div className="billing_details_container">
            <h4 className="container_title">Payment details</h4>
            <div className="inputs_container">
              <h2 className="payment_method_title">Payment Method</h2>
              <PaymentContainer input={input} setInput={setInput} />
              {input === 'first' && (
                <div className="e-money_details_container">
                  {' '}
                  <InputContainer
                    titleText={'e-Money Number'}
                    inputType={'number'}
                    placeHolderText="2569876"
                  />
                  <InputContainer
                    titleText={'e-Money PIN'}
                    inputType={'number'}
                    placeHolderText="6891"
                  />
                </div>
              )}
            </div>
          </div>
          <SummaryContainer />
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
