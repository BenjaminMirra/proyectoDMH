import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";
import LayoutLogin from "../../layout/layout-login";

const SuccessRegister = () => {
  return (
    <LayoutLogin>
      <Head>
        <title>Recupero Contraseña</title>
        <meta
          name="description"
          content="Registro exitoso Digital Money House"
        />
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
          backgroundColor: "var(--main-bg-color)",
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
          ¡Contraseña modificada!
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            "@media only screen and (max-width: 768px)": {
              width: "80%",
            },
            "@media only screen and (min-width: 768px)": {
              width: "60%",
            },
            "@media only screen and (min-width: 1366px)": {
              width: "35%",
            },
          }}
        >
          <CheckCircleOutlineIcon
            sx={{
              color: "#C1FD35",
              fontSize: "100px",
              fontWeight: "200",
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
            ¡Tu contraseña ha sido modificada con éxito!
          </Typography>
        </Box>
        <Link
          href="/"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <Button variant="primary" color="secondary" size="large" fullWidth>
            Continuar
          </Button>
        </Link>
      </main>
    </LayoutLogin>
  );
};
export default SuccessRegister;
