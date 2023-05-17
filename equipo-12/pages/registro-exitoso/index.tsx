import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import LayoutRegister from "../../layout/layout-register";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";

const SuccessRegister = () => {
  return (
    <LayoutRegister>
      <Head>
        <title>Registro DMH</title>
        <meta name="description" content="Registro Digital Money House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main
        style={{
          margin: "0 auto",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#201F22",
          padding: "25px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            marginBottom: "40px",
            color: "#FFFF",
          }}
        >
          Registro Exitoso
        </Typography>
        <Box
          sx={{
            width: "35%",
            textAlign: "center",
          }}
        >
          <CheckCircleOutlineIcon
            sx={{
              color: "#C1FD35",
              fontSize: "70px",
              marginBottom: "30px",
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{
              marginBottom: "40px",
              color: "#FFFF",
            }}
          >
            Hemos enviado un correo de confirmación para validar tu email, por
            favor revisalo para iniciar sesión
          </Typography>
        </Box>
        <Link href="/">
          <Button variant="secondary">Continuar</Button>
        </Link>
      </main>
    </LayoutRegister>
  );
};
export default SuccessRegister;
