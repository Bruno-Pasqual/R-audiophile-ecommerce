import Button from '../Button/Button';
import styles from './HighlightsContainer.module.css';

const HighlightsContainer = () => {
  return (
    <div className={styles.highlight_container}>
      <div className={styles.zx9_container}>
        <div className={styles.zx9_img_container}></div>

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
  );
};

export default HighlightsContainer;
