import Button from '../Button/Button';
import styles from './HighlightsContainer.module.css';

const HighlightsContainer = () => {
  return (
    <div className={styles.highlight_container}>
      <div className={styles.zx9_container}>
        <div className={styles.zx9_img_container}></div>

        <div className={styles.zx9_details}>
          <p className={styles.highlight_title}>
            ZX9 <br />
            SPEAKER
          </p>
          <p className={styles.highlight_text}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button background="black" color="white" />
        </div>
      </div>
      <div className={styles.zx7_container}>
        <p className={styles.zx7_title}>ZX7 SPEAKER</p>
        <Button background="transparent" color="black" />
      </div>
      <div className={styles.yx1_container}>
        <div alt="" className={styles.yx1_img}></div>
        <div className={styles.yx1_details}>
          <p className={styles.yx1_title}>YX1 EARPHONES</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default HighlightsContainer;
