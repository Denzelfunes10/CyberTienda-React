// import styles from "./ItemListContainer.module.css";

import { useEffect, useState } from "react";
import { productos } from "../../../productosMock";
import { ProductList } from "./ProductList";
import { useParams } from "react-router-dom";

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = productos.filter(
      (producto) => producto.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : productos);
    });
    tarea.then((res) => setProducts(res));
    tarea.catch((error) => { console.log("catch: ", error);
    });
  }, [categoryName]);

  return <ProductList productos={products} categoria={categoryName}/>;
};

export default ProductListContainer;
