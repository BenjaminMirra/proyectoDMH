import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import router from "next/router";
import GenerateListCard from "./listCardComponent";

const ListCard = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  minWidth: "100%",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  paddingBottom:"20px",
}));

const ListCards = () => {
  const [listCard, setListCard] = useState<ListItemData[]>();
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
        url: `https://digitalmoney.ctd.academy/api/accounts/393/cards`,
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
          console.log("id_account " + idAccount);
          console.log("id_account " + JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
          router.push("/");
        });
    }
  }, []);

  const listItems = GenerateListCard(listCard);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={40}>
        <Box >
          <ListCard  >
            <List>
              <Typography sx={{ mt: 4, 
                                mb: 2,
                                paddingLeft:"20px" }} variant="h6" component="div">
                Tus tarjetas
              </Typography>
              {listItems}
            </List>
          </ListCard>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ListCards;

/*

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
*/
