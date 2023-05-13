import Image from "next/image";
import styles from "./header.module.css";
import imageLogo from "../../utils/image/imageLogo.svg";
import Button from "@mui/material/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Image
          src={imageLogo}
          alt="logo"
          width={86}
          height={33}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/iniciar-sesion">
          <Button sx={{
            color: "#C1FD35",
            borderColor: "#C1FD35",
            "&:hover": {
              backgroundColor: "#C1FD35",
              color: "#181818",
              borderColor: "#C1FD35",
            },
            textTransform: "none",
            fontWeight: "700",
            marginRight: "20px"
          }} variant="outlined">
            Ingresar
          </Button>
        </Link>
        <Link href="/crear-cuenta">
          <Button sx={{
            color: "#181818",
            border: 1,
            bgcolor: "#C1FD35",
            "&:hover": {
              bgcolor: "#181818",
              color: "#C1FD35"
            },
            textTransform: "none",
            fontWeight: "700"
          }} variant="contained">
            Crear Cuenta
          </Button>
        </Link>
      </div>


    </div>
  );
};

export default Header;