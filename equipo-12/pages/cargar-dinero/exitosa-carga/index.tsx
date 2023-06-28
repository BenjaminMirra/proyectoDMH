import { Box, Button } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import AlertChargeBox from "../../../components/ChargeInfo/AlertChargeBox";
import ArrowSubtitleMobile from "../../../components/ArrowSubtitleMobile";
import { useAccountContext } from "../../../context/accountContext";
import { NextPageWithLayout } from "../../_app";
import Layout from "../../../layout/layout";
import SuccessChargeBox from "../../../components/ChargeInfo/SuccessChargeBox";
import Link from "next/link";

const SuccessCharge: NextPageWithLayout<any> = () => {

  const { accountInfo } = useAccountContext();
  const [moneyToCharge, setMoneyToCharge] = useState<string | null>("");

  useEffect(() => {
    if (localStorage.getItem("moneyToCharge") !== null) {
      setMoneyToCharge(localStorage.getItem("moneyToCharge"));
    }
  });

  return (
    <>
      <Head>
        <title>Digital Money House</title>
        <meta name="description" content="Digital Money House" />
      </Head>
      <Box
        sx={{
          width: "265px",
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
        <SuccessChargeBox info={accountInfo} money={moneyToCharge} />
      </Box >
    </>
  );
};

SuccessCharge.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default SuccessCharge;