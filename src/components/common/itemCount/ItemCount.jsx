import { useCount } from "../../hooks/useCount";
import styles from "./ItemCount.module.css"
export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <div className={styles.container}>
      <div className={styles.btnOpe}>
        <button className={styles.btn} onClick={decrement}>-</button>
        <span className={styles.number}>{count}</span>
        <button className={styles.btn} onClick={increment}>+</button>
      </div>
      <button className={styles.addToCart} onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};