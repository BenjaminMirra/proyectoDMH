import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";
import "react-credit-cards/es/styles-compiled.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ControlledInput from "../../components/FormController/controlled-input";
import CreditCard from "../../components/CreditCard/creditCard";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "../../layout/layout";

interface PropsType {
  children?: ReactElement;
}

const addCard: NextPageWithLayout<PropsType> = () => {
  return (
    <>
      <Head>
        <title>Recupero Pendiente</title>
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
          padding: "25px",
          backgroundColor: "#EEEAEA",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            backgroundColor: "#fff",
            textAlign: "center",
            "@media only screen and (max-width: 768px)": {
              width: "100%",
              height: "75%",
            },
            "@media only screen and (min-width: 768px)": {
              width: "85%",
            },
            "@media only screen and (min-width: 1366px)": {
              width: "60%",
              height: "90%",
            },
          }}
        >
          <CreditCard />
        </Box>
      </main>
    </>
  );
};

addCard.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};
export default addCard;
