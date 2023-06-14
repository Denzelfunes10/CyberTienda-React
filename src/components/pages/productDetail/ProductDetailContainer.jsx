import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { productos } from "../../../productosMock";
import { useParams } from "react-router-dom";

export const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productFind = productos.find((producto) => producto.id === +id);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
  }, [id]);

  return <ProductDetail productSelected={productSelected} />;
};
