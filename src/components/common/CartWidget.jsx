import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  let itemsNumber = 1;

  return (
    <div className="cart-widget">
      <ShoppingCartIcon />
      <span className="notification">{itemsNumber}</span>
    </div>
  );
};
