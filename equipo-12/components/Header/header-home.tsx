import Image from "next/image";
import imageLogo from "../../utils/images/imageLogo.svg";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Box } from "@mui/material";

const HeaderHome = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      height: "64px",
      paddingRight: "20px",
      paddingLeft: "20px",
      paddingTop: "15.5px",
      backgroundColor: "#181818"
    }}>
      <Box>
        <Link href={"/"}>
          <Image
            src={imageLogo}
            alt="logo"
            width={86}
            height={33}
          />
        </Link>
      </Box>
      <Box sx={{
        display: "flex",
        gap: "20px",
      }}>
        <Link href="/iniciar-sesion/paso-1">
          <Button
            variant="primary"
          >
            Ingresar
          </Button>
        </Link>
        <Link href="/crear-cuenta">
          <Button
            variant="primary"
            color="secondary"
          >
            Crear Cuenta
          </Button>
        </Link>
      </Box>


    </Box >
  );
};

export default HeaderHome;