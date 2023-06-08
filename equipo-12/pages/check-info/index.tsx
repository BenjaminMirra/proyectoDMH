import { Box, Button, Typography } from "@mui/material";
import { ReactElement } from "react";
import Layout from "../../layout/layout";
import Head from "next/head";
import CheckInfoBox from "../../components/ChargeInfo/CheckInfoBox";
import ArrowSubtitleMobile from "../../components/ArrowSubtitleMobile";

const CheckInfo = () => {

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
          "@media (max-width: 767px)": {
            display: "none",
          },
          "@media (max-width: 1301px)": {
            width: "221px"
          },
        }}
      />

      <Box sx={{
        display: "flex",
        paddingTop: "64px",
        alignItems: "center",
        paddingLeft: "80px",
        paddingRight: "30px",
        width: "100%",
        backgroundColor: "#EEEAEA",
        flexDirection: "column",
        "@media (max-width: 767px)": {
          paddingTop: "40px",
          justifyContent: "flex-start",
          paddingLeft: "20px",
          paddingRight: "20px",
        },
      }}>
        <Box sx={{
          display: "none",
          "@media only screen and (max-width: 767px)": {
            width: "100%",
            paddingBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }
        }}>
          <ArrowSubtitleMobile title={"Cargar dinero"} />
        </Box>
        <CheckInfoBox />
        <Box sx={{
          display: "none",
          "@media (max-width: 767px)": {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            paddingTop: "20px",
            paddingBottom: "20px"
          },
        }}>
          <Button variant="primary" color="secondary"
            sx={{
              width: "165px",
              height: "50px",
            }}>
            <Typography variant="button">
              Continuar
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

CheckInfo.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default CheckInfo;