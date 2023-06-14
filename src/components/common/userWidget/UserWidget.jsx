import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import style from "./UserWidget.module.css"

export const UserWidget = () => {
  return (
    <div className={style.UserIcon}>
      <a className={style.nameSection}><AccountCircleIcon fontSize="large" /> Iniciar Sesión</a>
    </div>
  );
};
