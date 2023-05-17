import { Typography } from "@mui/material";
import Head from "next/head";
import LayoutRegister from "../../layout/layout-register";
import FormRegister from "../../components/FormController/form-register";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";

const Register: NextPageWithLayout<any> = () => {
  return (
    <>
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
          variant="h2"
          sx={{
            marginBottom: "40px",
            color: "#FFFF",
            fontSize: "20px",
          }}
        >
          Crear Cuenta
        </Typography>
        <FormRegister />
      </main>
    </>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <LayoutRegister>{page}</LayoutRegister>;
};

export default Register;
