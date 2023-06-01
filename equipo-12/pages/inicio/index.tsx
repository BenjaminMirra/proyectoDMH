import { Box, Button, Typography } from "@mui/material";
import { ReactElement } from "react";
import Layout from "../../layout/layout";
import AvailableAmount from "../../components/AvailableAmount";
import Transferences from "../../components/Transferences";
import Head from "next/head";
import ArrowSubtitleMobile from "../../components/ArrowSubtitleMobile";

const Inicio = () => {

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
      <Box sx={{ display: "flex", width: "100%", backgroundColor: "#EEEAEA" }}>
        <Box sx={{ width: "100%", gap: "10px", display: "flex", flexDirection: "column", alignItems: "center", padding: "50px", paddingLeft: "100px", "@media (max-width: 768px)": { padding: "10px" } }}>
          <ArrowSubtitleMobile title="Inicio"></ArrowSubtitleMobile>
          <AvailableAmount></AvailableAmount>
          <Box sx={{ display: "flex", width: "100%", gap: "10px", "@media (max-width: 768px)": { flexDirection: "column" } }}>
            <Button sx={{ width: "50%", "@media (max-width: 768px)": { width: "100%" } }} variant="xxl">Transferir Dinero</Button>
            <Button sx={{ width: "50%", "@media (max-width: 768px)": { width: "100%" } }} variant="xxl">Ingresar dinero</Button>
          </Box>
          <Transferences></Transferences>
        </Box>
      </Box>
    </>
  );
};

Inicio.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default Inicio;