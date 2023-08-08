import { NavLink } from 'react-router-dom';
import styles from './CategoryContainer.module.css';
import { useGlobalContext } from '../../Context';

const CategoryContainer = () => {
  const { setMenuOpen } = useGlobalContext();

  return (
    <div className={styles.category_container}>
      <div className={styles.category_card}>
        <div className={styles.headphones_img_container}></div>
        <p className={styles.category_title}>Headphones</p>
        <NavLink
          onClick={() => setMenuOpen(false)}
          className={styles.category_link}
          to={'/R-audiophile-ecommerce/products/headphones'}
        >
          SHOP <div className={styles.arrow_icon}></div>
        </NavLink>
      </div>
      <div className={styles.category_card}>
        <div className={styles.speakers_img_container}></div>
        <p className={styles.category_title}>Speakers</p>
        <NavLink
          onClick={() => setMenuOpen(false)}
          className={styles.category_link}
          to={'/R-audiophile-ecommerce/products/speakers'}
        >
          SHOP <div className={styles.arrow_icon}></div>
        </NavLink>
      </div>
      <div className={styles.category_card}>
        <div className={styles.earphones_img_container}></div>
        <p className={styles.category_title}>earphones</p>
        <NavLink
          onClick={() => setMenuOpen(false)}
          className={styles.category_link}
          to={'/R-audiophile-ecommerce/products/earphones'}
        >
          SHOP <div className={styles.arrow_icon}></div>
        </NavLink>
      </div>
    </div>
  );
};

export default CategoryContainer;
