function AddToCart(product, cartProducts, setCartProducts) {
  if (cartProducts) {
    const productAlreadyAdded = cartProducts.findIndex(({ name }) => {
      return name === product.name;
    });

    if (productAlreadyAdded != -1) {
      //achou
      const tempArray = [...cartProducts];
      tempArray[productAlreadyAdded].quantity += product.quantity;
      console.log(tempArray[productAlreadyAdded]);
      setCartProducts(tempArray);
    } else {
      //Não achou
      setCartProducts((previous) => {
        return [...previous, product];
      });
    }
  } else {
    setCartProducts([product]);
  }

  console.log(cartProducts);
}

export default AddToCart;
