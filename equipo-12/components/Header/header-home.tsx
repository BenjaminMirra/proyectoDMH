import Image from "next/image";
import styles from "./header-home.module.css";
import imageLogo from "../../utils/images/imageLogo.svg";
import Button from "@mui/material/Button";
import Link from "next/link";

const HeaderHome = () => {
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <Image
            src={imageLogo}
            alt="logo"
            width={86}
            height={33}
          />
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/iniciar-sesion/paso-1">
          <Button
            sx={{
              padding: "40px 20px",
              backgroundColor: "transparent",
              color: "#C1FD35",
              border: "1px solid #C1FD35",
              width: "99px !important",
              height: "40px !important",
              "&:hover": {
                backgroundColor: "#C1FD35",
                color: "#201F22",
              },
            }}
          >
            Ingresar
          </Button>
        </Link>
        <Link href="/crear-cuenta">
          <Button
            sx={{
              backgroundColor: "#C1FD35",
              color: "#201F22",
              padding: "40px 20px",
              width: "141px !important",
              height: "40px !important",
              "&:hover": {
                backgroundColor: "#201F22",
                color: "#C1FD35",
                border: "1px solid #C1FD35",
              },
            }}
          >
            Crear Cuenta
          </Button>
        </Link>
      </div>


    </div>
  );
};

export default HeaderHome;