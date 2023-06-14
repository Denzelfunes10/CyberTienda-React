import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";

export const ProductCard = ({ producto }) => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={producto.img} alt="{producto.description}" />
      </div>
      <div className={style.divDescription}>
        <figcaption className={style.target}>{producto.name}</figcaption>
        <p>${producto.price}</p>
        <div>
          <Link to={`/detalle/${producto.id}`}>
            <button className={style.btnAdd}>VER DETALLES</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
