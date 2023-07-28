/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../../Context';
import styles from './ProductsDisplay.module.css';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const ProductsDisplay = () => {
  const { selectedProduct, data, setSelectedProduct, imageSize } =
    useGlobalContext();
  const [productQuantity, setProductQuantity] = useState(5);

  let {
    category,
    new: novo,
    name,
    description,
    price,
    features,
    includes,
    gallery,
    others,
    image,
  } = selectedProduct;
  price = price.toLocaleString();

  return (
    <div className={styles.display_container}>
      <div className={styles.header}>
        <img
          /*  srcSet={`../${image.mobile} `} */
          className={styles.header_image}
          src={`../${image.desktop}`}
          alt={`image of the product ${name}`}
        />
        <div className={styles.details_container}>
          {novo && <p className={styles.new_product_tag}>NEW PRODUCT</p>}
          <h3 className={styles.product_title}>{name}</h3>
          <p className={styles.product_description}>{description}</p>
          <p className={styles.product_price}>{`$ ${price}`}</p>
          <div className={styles.quantity_line}>
            <QuantityContainer
              productQuantity={productQuantity}
              setProductQuantity={setProductQuantity}
            />
            <button className={styles.add_to_cart_btn}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className={styles.features_in_the_box_wrapper}>
        <div className={styles.features_container}>
          <p className={styles.container_title}>FEATURES</p>
          <p className={styles.features_text}>{features}</p>
        </div>
        <div className={styles.in_the_box_container}>
          <p className={styles.container_title}>IN THE BOX</p>
          <ul className={styles.box_list}>
            {includes.map(({ quantity, item }) => {
              return (
                <li key={nanoid()}>
                  <p>
                    <span>{quantity}x </span> {item}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.gallery_container}>
        <img
          src={`../${gallery.first[imageSize]}`}
          alt=""
          className={styles.first_image}
        />
        <img
          src={`../${gallery.second[imageSize]}`}
          alt=""
          className={styles.second_image}
        />
        <img
          src={`../${gallery.third[imageSize]}`}
          alt=""
          className={styles.third_image}
        />
      </div>
      <AlsoLikeContainer
        data={data}
        others={others}
        setSelectedProduct={setSelectedProduct}
        imageSize={imageSize}
      />
    </div>
  );
};

export default ProductsDisplay;

const QuantityContainer = ({ productQuantity, setProductQuantity }) => {
  const handleMinus = () => {
    setProductQuantity((previous) => {
      if (previous > 0) {
        return previous - 1;
      } else {
        return previous;
      }
    });
  };
  const handlePlus = () => {
    setProductQuantity((previous) => {
      return previous + 1;
    });
  };

  return (
    <div className={styles.quantity_container}>
      <button className="minus" onClick={handleMinus}>
        -
      </button>
      <p className="product_quantity">{productQuantity}</p>
      <button className="plus" onClick={handlePlus}>
        +
      </button>
    </div>
  );
};

const AlsoLikeContainer = ({ others, data, setSelectedProduct, imageSize }) => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    const clickedProduct = data.find((produto) => produto.slug === slug);
    setSelectedProduct(clickedProduct);

    navigate(
      `/R-audiophile-ecommerce/products/${clickedProduct.category}/${slug}`
    );
  };

  return (
    <div className={styles.also_like_container}>
      {others.map(({ slug, name, image }) => {
        return (
          <div className={styles.also_like_card} key={nanoid()}>
            <img
              className={styles.also_like_img}
              src={`../${image.desktop}`}
              alt=""
            />
            <p className={styles.container_title}>{name}</p>
            <button
              onClick={() => handleClick(slug)}
              className={styles.also_like_btn}
            >
              SEE PRODUCT
            </button>
          </div>
        );
      })}
    </div>
  );
};
