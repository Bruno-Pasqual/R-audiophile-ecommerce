import styles from './bringingContainer.module.css';

const BringingContainer = () => {
  return (
    <div className={styles.bringing_container}>
      <div className={styles.bringing_center}>
        <div className={styles.img_container}></div>
        <div className={styles.details_container}>
          <div className={styles.container_title}>
            Bringing you the <span>best</span> audio gear
          </div>
          <p className={styles.bringing_text}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BringingContainer;
