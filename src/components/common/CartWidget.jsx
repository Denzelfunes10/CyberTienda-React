import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./CartWidget.module.css";

export const CartWidget = () => {
  let itemsNumber = 1;

  return (
    <div className={style.cartIcon}>
      <a className={style.nameSection}>Mi carrito <ShoppingCartIcon fontSize="large"/></a> 
      <span className={style.itemsNumber}>{itemsNumber}</span>
    </div>
  );
};
