import Image from "next/image";
import imageLogo from "../../utils/images/imageLogo.svg";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Box } from "@mui/material";

const HeaderHome = () => {
  return (
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
      </Box>
    </Box>
  );
};

export default HeaderHome;
