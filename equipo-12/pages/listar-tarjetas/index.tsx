import LayoutHome from "../../layout/layout-home";
import { ReactElement, useEffect, useState } from "react";
import AddCard from "../../components/ListCard/addCard";
import ListCards from "../../components/ListCard/listCard";
import { Box } from "@mui/material";

const ListCard = () => {
  return (
    <>

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
  return <LayoutHome>{page}</LayoutHome>;
};

export default ListCard;