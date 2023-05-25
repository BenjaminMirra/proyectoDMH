import Head from "next/head";
import LayoutHome from "../../layout/layout-home";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./../_app";
import AddCard from "../../components/ListCard/addCard";
import ListCard from "../../components/ListCard/listCard";
import { Box } from "@mui/material";



interface PropsType {
    children?: ReactElement;
  }
  
const ListCards: NextPageWithLayout<PropsType> = ({ texts, images, cards }: any) => {
  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}>
        <Box sx={{ marginBottom: "1rem" }}>
          <AddCard />
        </Box>
        <Box>
          <ListCard />
        </Box>        
      </Box>
   
   
   
    </>    
  );
};


//<ListCard />
  
ListCards.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHome>{page}</LayoutHome>;
};

export default ListCards;
