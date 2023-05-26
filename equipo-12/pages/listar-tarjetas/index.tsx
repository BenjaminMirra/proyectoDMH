import Head from "next/head";
import LayoutHome from "../../layout/layout-home";
import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "./../_app";
import AddCard from "../../components/ListCard/addCard";
import ListCards from "../../components/ListCard/listCard";
import { Box } from "@mui/material";
import axios from "axios";
import router from "next/router";

const ListCard = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const config = {
      method: "get",
      url: `https://digitalmoney.ctd.academy/api/users/${userId}`,
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
    };

    axios.request(config)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        router.push("/");
        console.log(error);
      });
  }, []);

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
        <Box sx={{ marginBottom: "1rem" }}>
          <ListCards userInfo = {userInfo}/>
        </Box>

      </Box>



    </>
  );
};

ListCard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHome>{page}</LayoutHome>;
};

export default ListCard;