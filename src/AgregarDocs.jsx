import { addDoc, collection } from "firebase/firestore"
import { productos } from "./productosMock"
import { dataBase } from "./firebaseConfig"

const AgregarDocs = () => {
    const rellenar = () => {
        let products = collection (dataBase, "productos")
        productos.forEach((elemento) => {
            addDoc(products, elemento)
        })
    }
  return (
    <div>
        <button onClick={rellenar}>Enviar Productos</button>
    </div>
  )
}

export default AgregarDocs