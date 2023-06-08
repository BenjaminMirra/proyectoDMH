import { Box, Button, Typography } from "@mui/material";
import { ReactElement } from "react";
import Layout from "../../layout/layout";
import Head from "next/head";
import SuccessChargeBox from "../../components/ChargeInfo/SuccessChargeBox";
import AlertChargeBox from "../../components/ChargeInfo/AlertChargeBox";
import ArrowSubtitleMobile from "../../components/ArrowSubtitleMobile";

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
      />
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
        "@media only screen and (max-width: 1300px)": {
          marginLeft: "45px",
        },
        "@media only screen and (max-width: 768px)": {
          paddingRight: "20px",
          paddingLeft: "20px",
          marginLeft: "0px",
          paddingTop: "30px"
        }
      }}>
        <Box sx={{
          display: "none",
          "@media only screen and (max-width: 768px)": {
            width: "100%",
            paddingBottom: "10px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }
        }}>
          <ArrowSubtitleMobile title={"Cargar dinero"} />
        </Box>
        <AlertChargeBox />
        <SuccessChargeBox />
        <Box sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
          gap: "20px",
          paddingTop: "10px",
          "@media only screen and (max-width: 1098px)": {
            justifyContent: "center",
          },
          "@media only screen and (max-width: 768px)": {
            flexDirection: "column-reverse",
            paddingBottom: "30px",

          },
        }}>
          <Button variant="primary" sx={{
            textTransform: "none",
            backgroundColor: "#CECECE",
            borderColor: "#CECECE",
            color: "black",
            width: "233px",
            height: "65px",
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#a5a5a5",
              borderColor: "#a5a5a5",
            },
            "@media only screen and (max-width: 1098px)": {
              width: "243px",
            },
            "@media only screen and (max-width: 768px)": {
              width: "100%"
            }
          }}>
            Ir al Inicio
          </Button>
          <Button variant="primary" color="secondary" sx={{
            width: "233px",
            height: "65px",
            fontSize: "16px",
            "@media only screen and (max-width: 1098px)": {
              width: "243px",
            },
            "@media only screen and (max-width: 768px)": {
              width: "100%"
            },
          }
          } >
            Descargar comprobante
          </Button>
        </Box>
      </Box >
    </>
  );
};

SuccessCharge.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default SuccessCharge;