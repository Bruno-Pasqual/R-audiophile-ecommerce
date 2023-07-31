import { useGlobalContext } from '../../Context';
import styles from './Hamburguer.module.css';

const Hamburguer = () => {
  const { setMenuOpen } = useGlobalContext();

  const handleClick = () => {
    setMenuOpen((previous) => {
      return !previous;
    });
  };

  return (
    <div className={styles.hamburguer_menu} onClick={handleClick}>
      <div className={styles.hamburguer_line}></div>
      <div className={styles.hamburguer_line}></div>
      <div className={styles.hamburguer_line}></div>
    </div>
  );
};

export default Hamburguer;
