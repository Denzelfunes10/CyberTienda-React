import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer>
        <section className={styles.footerSection}>
            <h3>CONTACTANOS</h3>
            <div className={styles.horario}>
                <p>
                    HORARIO<br/>
                    Lunes a Viernes:<br/>
                    8:30-5:30pm<br/>
                    Sábado y domingo:<br/>
                    9:00-1:00 pm.<br/>
                </p>
            </div>
            <div className={styles.direccion}>
                <p>
                    Visítanos en Bulevar Constitución #40,<br/>
                    Frente a Vidri y Pampa,<br/>
                    a 100 Metros del redondel Constitución.<br/>
                </p>
            </div>
            <div className={styles.redes}>
                <img src="https://res.cloudinary.com/dkuk6pjpz/image/upload/v1686769762/CyberTienda/insta2_njmmrb.png" alt="instagram"/>
                <img src="https://res.cloudinary.com/dkuk6pjpz/image/upload/v1686769762/CyberTienda/face2_xvexig.png" alt="facebook"/>
                <img src="https://res.cloudinary.com/dkuk6pjpz/image/upload/v1686769756/CyberTienda/whatsapp2_l77ks9.png" alt="whatsapp"/>
            </div>
        </section>
    </footer>
  )
}
