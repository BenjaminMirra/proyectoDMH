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
      paddingRight: "20px",
      paddingBottom: "12px",
      paddingLeft: "20px",
      paddingTop: "15.5px",
      backgroundColor: "#181818",
      "@media (max-width:768px)": {
        paddingRight: "10px",
        paddingLeft: "10px",
      },
    }}>
      <Box>
        <Link href={"/"}>
          <Image
            src={imageLogo}
            alt="logo"
            width={86}
            height={40}
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
            size="medium"
            sx={{
              width: "99px !important"
            }}
          >
            Ingresar
          </Button>
        </Link>
        <Link href="/crear-cuenta">
          <Button
            variant="primary"
            color="secondary"
            sx={{
              width: "131px !important"
            }}
          >
            Crear Cuenta
          </Button>
        </Link>
      </Box>


    </Box >
  );
};

export default HeaderHome;