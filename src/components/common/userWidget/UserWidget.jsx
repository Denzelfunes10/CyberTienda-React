import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import style from "./UserWidget.module.css"

export const UserWidget = () => {
  return (
    <div className={style.UserIcon}>
      <span className={style.nameSection}><AccountCircleIcon fontSize="large" /> Iniciar Sesión</span>
    </div>
  );
};
