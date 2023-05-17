import Image from "next/image";
import imageLogo from "../../utils/images/imageLogo.svg";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Box } from "@mui/material";

const HeaderHome = () => {
  return (
<<<<<<< HEAD
    <Box
      sx={{
        backgroundColor: "var(--main-bg-color)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <Box>
          <Link
            href={"/"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src={imageLogo} alt="logo" />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Link href="/iniciar-sesion/paso-1">
            <Button variant="primary">Ingresar</Button>
          </Link>
          <Link href="/registro">
            <Button variant="primary" color="secondary">
              Crear Cuenta
            </Button>
          </Link>
        </Box>
=======
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
>>>>>>> 1b76dea782487ffef90636f59a30087fb16e3504
      </Box>
    </Box>
  );
};

export default HeaderHome;
