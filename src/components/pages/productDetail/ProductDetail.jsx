import { Link } from "react-router-dom";
import { ItemCount } from "../../common/itemCount/ItemCount";
import style from "./ProductDetail.module.css";

const ProductDetail = ({ productSelected, onAdd, cantidad,  }) => {

  return (
    <main className={style.containerSection}>
      <div className={style.rute}>
        <Link to="/">
          <div>
            <img
              src="https://res.cloudinary.com/dkuk6pjpz/image/upload/v1686764301/CyberTienda/25694_pob72l.png"
              alt="Incio"
            />
            <span>| VOLVER</span>
          </div>
        </Link>
      </div>
      <div className={style.container}>
        <h2>{productSelected.name}</h2>
        <img src={productSelected.img} alt="" />
        <span>${productSelected.price}</span>
        <p>{productSelected.description}</p>
      </div>
      <div className={style.containerBtn}>
        {productSelected.stock > 0 ? (
          <ItemCount
            stock={productSelected.stock}
            initial={cantidad}
            onAdd={onAdd}
          />
        ) : (
          <h3>No hay stock</h3>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
