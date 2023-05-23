import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ saludo }) => {
  return (
    <div className={styles.Message}>
      <h2>{saludo}</h2>
    </div>
  );
};

export default ItemListContainer;
