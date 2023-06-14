import { Link } from "react-router-dom";
import { ProductCard } from "../../common/productCard/ProductCard";
import style from "./ProductList.module.css";

export const ProductList = ({ productos, categoria }) => {
  return (
    <section className={style.productsContainer}>
      {categoria !== undefined && (
        <div className={style.rute}>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dkuk6pjpz/image/upload/v1686764301/CyberTienda/25694_pob72l.png"
              alt="Incio"
            />
          </Link>
          <span>| {categoria}</span>
        </div>
      )}
      <div className={style.products}>
        {productos.map((producto) => {
          return <ProductCard key={producto.id} producto={producto} />;
        })}
      </div>
    </section>
  );
};
