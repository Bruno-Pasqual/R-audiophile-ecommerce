import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context';

/* eslint-disable react/prop-types */
const Button = ({
  color = 'black',
  background = 'transparent',
  text = 'See product',
  border = '1px solid black',
}) => {
  const navigate = useNavigate();
  const { data, setSelectedProduct } = useGlobalContext();

  const handleClick = (e) => {
    const array = [...e.target.parentElement.children];
    array.pop();

    const ElementoCorrespondente = array.find((elemento) =>
      elemento.classList[0].split('_').includes('title')
    );

    const product = data.find((product) => {
      if (
        product.name.toLowerCase() ===
        ElementoCorrespondente.textContent.toLowerCase()
      )
        return true;
      if (
        //exceção do yx1 que é escrito de forma diferente no HTML
        product.name.toLowerCase().includes('yx1') &&
        ElementoCorrespondente.textContent.toLowerCase().includes('yx1')
      )
        return true;
    });

    setSelectedProduct(product);
    navigate(
      `/R-audiophile-ecommerce/products/${product.category}/${product.slug}`
    );
  };

  const button_style = {
    width: '160px',
    height: '48px',
    background: background,
    color: color,
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    border: border,
  };

  return (
    <button onClick={handleClick} style={button_style}>
      {text}
    </button>
  );
};

export default Button;
