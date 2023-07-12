// import styles from "./UserLogin.module.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import styles from "./UserLogin.module.css";

export const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Box
        sx={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <h2 className={styles.title}>INICIAR SESIÓN</h2>
        <TextField
          label="Usuario"
          color="secondary"
          sx={{
            width: "20%",
          }}
        />
        <FormControl
          sx={{
            width: "20%",
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password" color="secondary">
            Contraseña
          </InputLabel>
          <OutlinedInput
            color="secondary"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility color="secondary" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Contraseña"
          />
        </FormControl>
        <Button variant="contained" color="secondary" type="submit">
          Ingresar
        </Button>
      </Box>
    </div>
  );
};
