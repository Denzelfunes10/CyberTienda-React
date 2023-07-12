import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { dataBase } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { GridLoader } from "react-spinners";

const loaderObject = {
  display: "block",
  margin: " 300px auto",
  borderColor: "red",
};

export const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);
  const { id } = useParams();
  const cantidad = getTotalQuantityById(id);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(data);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto añadido a la cesta",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    let productsCollection = collection(dataBase, "productos")
    let refDoc = doc(productsCollection, id)
    getDoc(refDoc).then((res) => {
      setProductSelect( {...res.data(), id: res.id})
    })
  }, [id]);

  return (
    <div>
      {productSelected.id ? (
        <ProductDetail productSelected={productSelected}
        addToCart={addToCart}
        cantidad={cantidad}
        onAdd={onAdd} />
      ) : (
        <GridLoader size={25} cssOverride={loaderObject} color="#00008b" />
      )}
    </div>
  );
};
