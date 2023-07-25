import styles from './Hero.module.css';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.hero_container}>
        <div className={styles.hero_details}>
          <p className={styles.new_product_tag}>NEW PRODUCT</p>
          <p className={styles.hero_title}>XX99 MARK II HEADPHONES</p>
          <p className={styles.hero_text}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button background="#D87D4A" color="white" border="none" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
