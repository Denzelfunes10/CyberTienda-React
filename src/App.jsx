import "bootstrap/dist/css/bootstrap.css";
import ProductListContainer from "./components/pages/productList/ProductListContainer";
import { Layout } from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserLogin } from "./components/pages/login/UserLogin";
import { Cart } from "./components/pages/cart/Cart";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProductListContainer />} />
          <Route path="/Categorias/:categoryName" element={<ProductListContainer />} />
          <Route path="/detalle/:id" element={<ProductDetailContainer />} />
          <Route path="/Login" element={<UserLogin />} />
          <Route path="/MiCarrito" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
