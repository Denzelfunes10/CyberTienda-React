import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./CartWidget.module.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const {cart} = useContext(CartContext)
  let quantity = 0;
  
  cart.forEach((product) => {
    quantity += product.quantity;
  });
  return (
    <div className={style.cartIcon}>
      <span className={style.nameSection}>Mi carrito <ShoppingCartIcon fontSize="large"/></span> 
      <span className={style.itemsNumber}>{quantity}</span>
    </div>
  );
};
