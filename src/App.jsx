import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./components/layout/Navbar/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer";

function App() {
  const welcomeMessage = "¡Hola! Bienvenido a La CyberTienda";

  return (
    <>
      <header>
        <NavBar />
        <ItemListContainer saludo={welcomeMessage} />
      </header>
    </>
  );
}

export default App;
