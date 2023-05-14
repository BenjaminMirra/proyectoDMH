import Image from "next/image";
import styles from "./header.module.css";
import imageLogo from "../../utils/images/imageLogo.svg";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div>
        <Image src={imageLogo} alt="logo" width={86} height={33} />
      </div>
      <div className={styles.buttonContainer}>
        {router.pathname === "/iniciar-sesion/paso-1" ||
        router.pathname === "/iniciar-sesion/paso-2" ? (
          <></>
        ) : (
          <>
            <Link href="/iniciar-sesion/paso-1">
              <Button variant="primary">Ingresar</Button>
            </Link>
            <Link href="/crear-cuenta">
              <Button variant="secondary">Crear Cuenta</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
