import * as React from "react";
import { makeStyles, styled } from "@mui/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import GenerateListCard from "./listCardComponent";
import { Avatar, Divider, Link, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material";

const useStyles = makeStyles({
  root: {
    height: 300,
    overflow: "auto",
  },
});

const ListCard = styled("div")(({ theme }) => ({
  minWidth: "100%",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  paddingBottom: "20px",
}));

const ListCards = () => {
  const listItems = GenerateListCard();
  return (
    <Box sx={{ overflow: "auto", width: "100%", backgroundColor: "#FFF", borderRadius: "10px", boxShadow: "0px 4px 4px #0000004c", }}>
      <List sx={{ width: "100%", }}>
        <ListItem sx={{ padding: "20px" }}>
          <Typography variant="h4" sx={{}}>Tus tarjetas</Typography>
        </ListItem>
        {listItems}
      </List>
    </Box>
  );
};

export default ListCards;
