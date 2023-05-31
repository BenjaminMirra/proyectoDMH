import * as React from "react";
import { makeStyles} from "@mui/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import GenerateListCard from "./listCardComponent";
import {  ListItem} from "@mui/material";

const useStyles = makeStyles({
  root: {
    height: 300, // Altura deseada para el área de la lista
    overflow: 'auto',
  },
});

const ListCards = () => {
  const classes = useStyles();
  const [idAccount, setIdAccount] = useState<number>(0);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios("https://digitalmoney.ctd.academy/api/account", {
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      setIdAccount(response.data?.id);
    });
  }, [idAccount]);

  const listItems = GenerateListCard(idAccount);
  return (
    <Box sx={{ width: "100%", backgroundColor: "#FFF", borderRadius: "10px", boxShadow: "0px 4px 4px #0000004c", }}>
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

