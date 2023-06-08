import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import Layout from "../../layout/layout";
import Head from "next/head";
import CheckInfoBox from "../../components/ChargeInfo/CheckInfoBox";

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
        backgroundColor: "#EEEAEA"
      }}>
        <CheckInfoBox />
      </Box>
    </>
  );
};

CheckInfo.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default CheckInfo;