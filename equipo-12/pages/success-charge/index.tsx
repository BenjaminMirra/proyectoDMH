import { Box, Button, Typography } from "@mui/material";
import { ReactElement } from "react";
import Layout from "../../layout/layout";
import Head from "next/head";
import SuccessChargeBox from "../../components/ChargeInfo/SuccessChargeBox";
import AlertChargeBox from "../../components/ChargeInfo/AlertChargeBox";

const SuccessCharge = () => {

  return (
    <>
      <Head>
        <title>Digital Money House</title>
        <meta name="description" content="Digital Money House" />
      </Head>
      <Box
        sx={{
          width: "276px",
          height: "100%",
          backgroundColor: "#C1FD35",
          "@media (max-width: 768px)": {
            display: "none",
          },
          "@media (max-width: 1301px)": {
            width: "221px"
          },
        }}
      ></Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "50px",
        width: "100%",
        backgroundColor: "#EEEAEA",
        flexDirection: "column",
        gap: "10px",
        marginLeft: "50px",
        paddingRight: "50px",
      }}>
        <AlertChargeBox />
        <SuccessChargeBox />
        <Box sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
          gap: "20px",
        }}>
          <Button variant="primary" sx={{
            textTransform: "none",
            backgroundColor: "#CECECE",
            color: "black",
            "&:hover": {
              backgroundColor: "#a5a5a5",
              borderColor: "#a5a5a5",
            },
          }} size="large">
            Ir al Inicio
          </Button>
          <Button variant="primary" color="secondary" size="large">
            <Typography variant="button">
              Descargar Comprobante
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

SuccessCharge.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default SuccessCharge;