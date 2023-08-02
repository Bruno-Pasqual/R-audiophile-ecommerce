import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Home/Navbar/Navbar';
import InputContainer from '../../Components/InputContainer/InputContainer';
import './CheckoutPage.css';

const CheckoutPage = () => {
  return (
    <div style={{ background: '#FAFAFA' }}>
      <Navbar />
      <div className="checkoutPage">
        <form action="">
          <div className="billing_details_container">
            <h4 className="container_title">Billing details</h4>
            <div className="inputs_container">
              <InputContainer titleText={'Name'} inputType={'text'} />
              <InputContainer titleText={'Email Address'} inputType={'email'} />
              <InputContainer titleText={'Name'} inputType={'text'} />
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
