import { ReactElement, ReactNode, useEffect, useState } from "react";
import AddCard from "../../components/ListCard/addCard";
import ListCards from "../../components/ListCard/listCard";
import { Box } from "@mui/material";
import Layout from "../../layout/layout";
import { NextPageWithLayout } from "../_app";

interface PropsType {
  children?: ReactNode;
}

const ListCard: NextPageWithLayout<PropsType> = () => {
  return (
    <>
<<<<<<< HEAD
     <Box
        sx={{
          width: "25%",
=======
      <Box
        sx={{
          width: "276px",
>>>>>>> f786ce9fb4bdd7a596b08c3f9b5ad59f36b2360a
          height: "100%",
          backgroundColor: "#C1FD35",
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      ></Box>
      <Box sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#EEEAEA"
      }}
      >
        <Box sx={{
          marginBottom: "1rem",
          paddingTop: "20px",
          paddingRight: "50px",
          paddingLeft: "50px"
        }}
        >
          <AddCard />
        </Box>
        <Box sx={{
          marginBottom: "1rem",
          paddingTop: "20px",
          paddingRight: "50px",
          paddingLeft: "50px",
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