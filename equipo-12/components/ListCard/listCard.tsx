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
    height: 300, // Altura deseada para el área de la lista
    overflow: 'auto',
  },
});

const ListCard = styled("div")(({ theme }) => ({
  minWidth: "100%",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  paddingBottom: "20px",
}));

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

/**
 *   
 */
/*
      <Box display="flex" flexDirection="column" height="100%" width="100%">
      <Box flex="1">

            <ListCard  >
        <Grid container spacing={2}
              >
          <Grid item xs={12} md={40}>
                  <Paper className={classes.root}
                  >
                    <List>
                <Typography sx={{
                  mt: 4,
                  mb: 2,
                  paddingLeft: "20px"
                }} variant="h6" component="div">
                  Tus tarjetas
                </Typography>
              </List>
                  </Paper>
          </Grid>
        </Grid>
            </ListCard>
      </Box>
    </Box>
    */