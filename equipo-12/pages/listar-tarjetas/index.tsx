import { ReactElement, ReactNode, useEffect, useState } from "react";
import AddCard from "../../components/ListCard/addCard";
import ListCards from "../../components/ListCard/listCard";
import { Box, Typography } from "@mui/material";
import Layout from "../../layout/layout";
import { NextPageWithLayout } from "../_app";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowSubtitleMobile from "../../components/ArrowSubtitleMobile";

interface PropsType {
  children?: ReactNode;
}

const ListCard: NextPageWithLayout<PropsType> = () => {
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
        }}
      ></Box>
      <Box sx={{
        height: "100%",
        width: "100vw",
        backgroundColor: "#EEEAEA",
        padding: "50px",
        "@media (max-width: 768px)": {
          paddingLeft: "0px",
        },
      }}
      >

        <Box sx={{
          marginBottom: "1rem",
        }}
        >
          <ArrowSubtitleMobile title="Tarjetas" />
          <AddCard />
        </Box>
        <Box sx={{
          marginBottom: "1rem",

        }} >
          <ListCards />
        </Box>

      </Box>
    </>
  );
};

ListCard.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default ListCard;