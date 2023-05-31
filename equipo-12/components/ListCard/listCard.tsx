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
  paddingBottom: "20px",
}));

const ListCards = () => {
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
    <Box display="flex" flexDirection="column" height="100%" width="100%">
      <Box flex="1">
        <Grid container spacing={2}>
          <Grid item xs={12} md={40}>

            <ListCard  >
              <List>
                <Typography sx={{
                  mt: 4,
                  mb: 2,
                  paddingLeft: "20px"
                }} variant="h6" component="div">
                  Tus tarjetas
                </Typography>
                {listItems}
              </List>
            </ListCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ListCards;

