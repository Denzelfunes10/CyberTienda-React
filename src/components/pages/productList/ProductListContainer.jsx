import { useEffect, useState } from "react";
import { dataBase } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ProductList } from "./ProductList";
import { useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";

const loaderObject = {
  display: "block",
  margin: " 300px auto",
  borderColor: "red",
};

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(dataBase, "productos");
    let list;
    if (!categoryName) {
      list = productsCollection;
    } else {
      list = query(productsCollection, where("category", "==", categoryName));
    }

    getDocs(list)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setProducts(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      {products.length > 0 ? (
        <ProductList productos={products} categoria={categoryName} />
      ) : (
        <GridLoader size={25} cssOverride={loaderObject} color="#00008b" />
      )}
    </div>
  );
};

export default ProductListContainer;
