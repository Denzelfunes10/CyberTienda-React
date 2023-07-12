import { Cart } from "../components/pages/cart/Cart";
import { Form } from "../components/pages/form/Form";
import ProductListContainer from "../components/pages/productList/ProductListContainer";
import { UserLogin } from "../components/pages/login/UserLogin";
import { ProductDetailContainer } from "../components/pages/productDetail/ProductDetailContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ProductListContainer,
  },
  {
    id: "Categorias",
    path: "/Categorias/:categoryName",
    Element: ProductListContainer,
  },
  {
    id: "detalles",
    path: "/detalle/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "carrito",
    path: "/MiCarrito",
    Element: Cart,
  },
  {
    id: "checkout",
    path: "/Checkout",
    Element: Form,
  },
  {
    id: "login",
    path: "/Login",
    Element: UserLogin,
  },
];
