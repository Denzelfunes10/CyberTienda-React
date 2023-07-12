import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, clearCart, removeById, getProductById, getTotalPrice } =
    useContext(CartContext);

  const limpiar = () => {
    Swal.fire({
      title: "¿Esta seguro de que desea vaciar todo de carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminalo",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("productos eliminados", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  const removeProduct = (id) => {
    const product = getProductById(id);
    Swal.fire({
      title: `¿Está seguro de que desea eliminar ${product.name} del carrito?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminalo",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        removeById(id);
        Swal.fire("productos eliminados", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  let subtotal = getTotalPrice();

  return (
    <main className={styles.carrito}>
      <div className={styles.carritoHeader}>
        <img
          src="https://res.cloudinary.com/dkuk6pjpz/image/upload/v1686770103/CyberTienda/cartIconSection_gfzwi5.png"
          alt="Icono de carrito de compras"
        />
        <h2>MI CARRITO</h2>
      </div>
      {cart.length < 1 ? (
        <div className={styles.emptycart}>
          <img
            src="https://res.cloudinary.com/dkuk6pjpz/image/upload/v1686770065/CyberTienda/sadFace_xae0qu.png"
            alt="carita triste"
          />
          <h3>Tu carrito se encuentra vacío</h3>
          <Link to="/">
            <p>!Vamos a llenarlo!</p>
          </Link>
        </div>
      ) : (
        <div className={styles.containerTable}>
          <table className={styles.productTable}>
            <thead>
              <tr>
                <th colSpan="2">Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody className={styles.productsContainer}>
              {cart.map((product) => {
                return (
                  <>
                    <tr key={product.id}>
                      <td className={styles.imgCart}>
                        <img src={product.img} alt={product.name} />
                      </td>
                      <td className={styles.description}>
                        <Link to={`/detalle/${product.id}`}>
                          <h4>{product.name}</h4>
                        </Link>
                        <button
                          className={styles.deleteBtn}
                          onClick={() => removeProduct(product.id)}
                        >
                          <img
                            src="https://res.cloudinary.com/dkuk6pjpz/image/upload/v1689070364/CyberTienda/trash_fjj9ey.svg"
                            alt="Basurero"
                          />
                          Eliminar
                        </button>
                      </td>
                      <td className={styles.quantityContainer}>
                        {/* <button
                          className={styles.subtractBtn}
                        >
                          -
                        </button> */}
                        <span className={styles.quantity}>
                          {product.quantity}
                        </span>
                        {/* <button className={styles.addBtn}>
                          +
                        </button> */}
                      </td>
                      <td>${product.price}</td>
                      <td>${product.price * product.quantity}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <table className={styles.resumeTable}>
            <thead>
              <tr>
                <th colSpan="2">Resumen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${subtotal}</td>
              </tr>
              <tr>
                <td>Costo de envío</td>
                <td>Gratis</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  TOTAL
                  <p>IVA incluido</p>
                </td>
                <td className={styles.totalPrice}>${subtotal}</td>
              </tr>
              <tr>
                <td colSpan="2" className={styles.checkoutBtnContainer}>
                  <Link to="/Checkout">
                    <button className={styles.checkoutBtn}>
                      Tramitar Pedido
                    </button>
                  </Link>
                  <button className={styles.cleanBtn} onClick={limpiar}>
                    Limpiar carrito
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </main>
  );
};
