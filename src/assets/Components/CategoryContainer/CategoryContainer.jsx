import { NavLink } from 'react-router-dom';
import styles from './CategoryContainer.module.css';

const CategoryContainer = () => {
  return (
    <div className={styles.category_container}>
      <div className={styles.category_card}>
        <img
          className={styles.headphones_img_container}
          src="assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt=""
        />
        <p className={styles.category_title}>Headphones</p>
        <NavLink
          className={styles.category_link}
          to={'/R-audiophile-ecommerce/products/headphones'}
        >
          SHOP <img src="assets/shared/desktop/icon-arrow-right.svg" alt="" />
        </NavLink>
      </div>
      <div className={styles.category_card}>
        <img
          className={styles.headphones_img_container}
          /*  src="/assets/shared/desktop/image-category-thumbnail-speakers.png" */
          src="assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt=""
        />
        <p className={styles.category_title}>Speakers</p>
        <NavLink
          className={styles.category_link}
          to={'/R-audiophile-ecommerce/products/speakers'}
        >
          SHOP <img src="assets/shared/desktop/icon-arrow-right.svg" alt="" />
        </NavLink>
      </div>
      <div className={styles.category_card}>
        <img
          className={styles.earphones_container}
          src="assets/shared/desktop/image-category-thumbnail-earphones.png
          "
          alt=""
        />
        <p className={styles.category_title}>earphones</p>
        <NavLink
          className={styles.category_link}
          to={'/R-audiophile-ecommerce/products/earphones'}
        >
          SHOP <img src="assets/shared/desktop/icon-arrow-right.svg" alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default CategoryContainer;
