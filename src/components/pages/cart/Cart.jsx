import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

export const Cart = () => {
  return (
    <main className={styles.carrito}>
      <div className={styles.carritoHeader}>
        <img
          src="https://res.cloudinary.com/dkuk6pjpz/image/upload/v1686770103/CyberTienda/cartIconSection_gfzwi5.png"
          alt="Icono de carrito de compras"
        />
        <h2>MI CARRITO</h2>
      </div>
      <div className={styles.emptycart}>
        <img
          src="https://res.cloudinary.com/dkuk6pjpz/image/upload/v1686770065/CyberTienda/sadFace_xae0qu.png"
          alt="carita triste"
        />
        <h3>Tu carrito se encuentra vacío</h3>
        <Link to="/">
          !Vamos a llenarlo!
        </Link>
      </div>
    </main>
  );
};
