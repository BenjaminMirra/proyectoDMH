import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import Divider from "@mui/material/Divider";
import { Button, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

interface ListItemData {
  account_id: number;
  cod: number;
  expiration_date: String;
  first_last_name: String;
}

function generate(listCard: ListItemData[]) {
  return listCard.map((item) => (
    <>
      <ListItem key={item.account_id}>
        <ListItemAvatar>
          <CircleIcon color="secondary" fontSize="large" />
        </ListItemAvatar>
        <Typography>
          Terminada en valor
        </Typography>
        <ListItemText secondary={item.cod} />
        <ListItemIcon>
          <Button>
            Eliminar
          </Button>
        </ListItemIcon>
      </ListItem> <Divider /></>
  ));
}

const ListCard = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,}));

const ListCards = ({ userInfo }: any) => {
  const [listCard, setListCard] = useState([
    {
      account_id: 0,
      cod: 0,
      expiration_date: "string",
      first_last_name: "string",
      id: 0,
      number_id: 0
    }
  ]);
  const [idAccount, setIdAccount] = useState();

  useEffect(() => {
  const token = localStorage.getItem("token");
  axios("https://digitalmoney.ctd.academy/api/account", {
    headers: {
      Authorization: token,
    },
  }).then((response) => {
    setIdAccount(response.data?.id);
    console.log(idAccount);
  });
}, [idAccount]);

  useEffect(() => {
    if (localStorage.getItem("userId") !== null) {
      const token = localStorage.getItem("token");
      const config = {
        method: "get",
        url: `https://digitalmoney.ctd.academy/api/accounts/${idAccount}/cards`, //account_id
        headers: {
          Authorization: token,
        },
        data: "",
      };
      axios
        .request(config)
        .then((response) => {
          setListCard(
            response.data
          );
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(token);
    }
    console.log(setListCard);
  }, []);

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
    }
  }, [userInfo]);

  const listItems = generate(listCard);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={40}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Tus tarjetas
        </Typography>
        <Divider />
        <Box sx={{
          height: '200px',
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
          },
        }}>
          <ListCard>
            <List   >
              {listItems}
            </List>
          </ListCard>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ListCards;
