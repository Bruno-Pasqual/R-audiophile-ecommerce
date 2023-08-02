function checkInput(value, setError, type) {
  console.log(isValidEmail(value));
  console.log(type);

  //Apenas letras

  //Apenas letras

  if (value === '') {
    setError({
      status: true,
      message: "Can't be empty",
    });
    return;
  } else {
    setError({
      status: false,
    });
  }

  if (type === 'text')
    if (onlyLetters(value)) {
      setError({
        status: false,
      });
    } else {
      setError({
        status: true,
        message: 'Only Letters',
      });
    }

  if (type === 'number') {
    if (!isNaN(value)) {
      setError({
        status: false,
      });
    } else {
      setError({
        status: true,
        message: 'Only numbers',
      });
    }
  }

  if (type === 'email') {
    if (isValidEmail(value)) {
      setError({
        status: false,
      });
    } else {
      setError({
        status: true,
        message: 'Wrong format',
      });
    }
  }
}

export default checkInput;

const onlyLetters = (value) => {
  const lettersArray = [...value];
  const onlylettersArray = lettersArray.filter((letter) => {
    if (!isNaN(letter)) {
      return false;
    }
    return true;
  });

  if (onlylettersArray.length != value.length) {
    return false;
  } else {
    return true;
  }
};

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
