import { useContext, useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";
import style from "./Form.module.css";
import { Link } from "react-router-dom";

export const Form = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    tel: "",
    mail: "",
  });

  //Validación del Formulario
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // nombre
    if (userData.name.length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
      valid = false;
    }

    // Telefono
    if (userData.tel.length !== 9) {
      newErrors.tel = "El numero de teléfono no es valido";
      valid = false;
    }

    // Validar campo de correo electrónico
    if (userData.mail.indexOf("@") === -1) {
      newErrors.mail = "La dirección de correo no es valida";
      valid = false;
    }

    // Validar coincidencia de correos electrónicos
    if (userData.mail !== userData.confirmMail) {
      newErrors.confirmMail = "Los correos electrónicos no coinciden";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  let total = getTotalPrice();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let order = {
        buyer: userData,
        items: cart,
        total: total,
      };
      let ordersCollection = collection(dataBase, "orders");
      addDoc(ordersCollection, order).then((res) => {
        setOrderId(res.id);
      });

      cart.map((product) => {
        updateDoc(doc(dataBase, "productos", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearCart();
    } else {
      console.log("Formulario inválido");
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // Limpia el mensaje de error al cambiar el valor
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const getClassName = (fieldName) => {
    return errors[fieldName]
      ? `${style.inputField} ${style.error}`
      : style.inputField;
  };

  return (
    <main>
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
      <div className={style.formContainer}>
        {orderId ? (
          <div className={style.comprobante}>
            <h1>
              Datos enviados exitosamente, <br />
              su numero de comprobante es: <br />
              <br /> {orderId} <br />
              <br /> !Gracias por su compra!
            </h1>
          </div>
        ) : (
          <form className={style.form} onSubmit={handleSubmit}>
            <h1>Datos de contacto</h1>

            <input
              type="text"
              placeholder="Nombre"
              name="name"
              className={getClassName("name")}
              onChange={handleChange}
            />
            {errors.name && <span className={style.error}>{errors.name}</span>}

            <input
              type="text"
              placeholder="Apellido"
              name="lastName"
              className={style.inputField}
              onChange={handleChange}
            />

            <input
              type="tel"
              placeholder="Teléfono"
              name="tel"
              className={getClassName("tel")}
              onChange={handleChange}
            />
            {errors.tel && <span className={style.error}>{errors.tel}</span>}

            <input
              type="text"
              placeholder="Correo electrónico"
              name="mail"
              className={getClassName("mail")}
              onChange={handleChange}
            />
            {errors.mail && <span className={style.error}>{errors.mail}</span>}

            <input
              type="text"
              placeholder="Confirmar correo electrónico"
              name="confirmMail"
              className={getClassName("confirmMail")}
              onChange={handleChange}
            />
            {errors.confirmMail && (
              <span className={style.error}>{errors.confirmMail}</span>
            )}

            <button className={style.submitButton}>Enviar</button>
          </form>
        )}
      </div>
    </main>
  );
};
