import styles from './Hamburguer.module.css';

const Hamburguer = () => {
  return (
    <div className={styles.hamburguer_menu}>
      <div className={styles.hamburguer_line}></div>
      <div className={styles.hamburguer_line}></div>
      <div className={styles.hamburguer_line}></div>
    </div>
  );
};

export default Hamburguer;
