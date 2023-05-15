import Image from "next/image";
import styles from "./header.module.css";
import imageLogo from "../../utils/images/imageLogo.svg";
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
          <Button variant="primary">
            Ingresar
          </Button>
        </Link>
        <Link href="/crear-cuenta">
          <Button variant="secondary">
            Crear Cuenta
          </Button>
        </Link>
      </div>


    </div>
  );
};

export default Header;