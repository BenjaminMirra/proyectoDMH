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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface PropsType {
  children?: ReactElement;
}

const addCard: NextPageWithLayout<PropsType> = () => {
  return (
    <>
      <Box
        sx={{
          width: "276px",
          height: "100%",
          backgroundColor: "#C1FD35",
          "@media (max-width: 768px)": {
            display: "none",
          },
          "@media (min-width: 768px)": {
            display: "block",
            maxWidth: "220px",
          },
          "@media (min-width: 1024px)": {
            display: "block",
            maxWidth: "275px",
          },
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#EEEAEA",
        }}
      >
        <Typography
          sx={{
            padding:"20px",
            "@media (max-width: 768px)": {
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            },
            "@media (min-width: 768px)": {
              display: "none",
            },
          }}
        >
          <ArrowForwardIcon /> Tarjetas
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#fff",
            textAlign: "center",  
            padding:"20px",          
            "@media only screen and (max-width: 768px)": {
              width: "90%",
              height: "85%",
              paddingTop:"230px",
            },
            "@media only screen and (min-width: 768px)": {
              width: "85%",
              height: "80%",
            },
            "@media only screen and (min-width: 1366px)": {
              width: "80%",
              height: "90%",
            },
          }}
        >
          <CreditCard />
        </Box>
      </Box>
    </>
  );
};

addCard.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};
export default addCard;
