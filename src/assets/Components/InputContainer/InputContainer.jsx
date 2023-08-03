/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import './InputContainer.css';
import checkInput from '../../Functions/checkInput';

const InputContainer = ({
  /*   inputWidth = '280px', */
  inputHeight = '56px',
  inputType = 'text',
  placeHolderText = 'digite algo',
  titleText = '',
  /*   ref, */
}) => {
  const inputStyle = {
    /*    width: inputWidth, */
    height: inputHeight,
    fontWeight: '700',
    color: 'black',
  };

  const [error, setError] = useState({
    status: false,
    message: 'Wrong format',
  });
  const inputRef = useRef(null);

  const handleChange = (e) => {
    checkInput(e.target.value, setError, inputType);
  };

  return (
    <div className="input_container">
      {error.status && <p className="error_message">{error.message}</p>}
      <p className={error.status ? 'input_title error' : 'input_title'}>
        {titleText}
      </p>
      <input
        type={inputType}
        style={inputStyle}
        className={error.status ? 'input_field error' : 'input_field'}
        name=""
        id=""
        placeholder={placeHolderText}
        ref={inputRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputContainer;
