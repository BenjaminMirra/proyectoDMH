import { Avatar, Box, Button, Card, Divider, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import LayoutHome from "../../layout/layout-home";
import { ReactElement } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "../../material-theme";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const Inicio = () => {
  const classes = useStyles();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ width: "25%", height: "100%", backgroundColor: "#C1FD35" }}>

      </Box>
      <Box sx={{ width: "75%", gap: "10px", display: "flex", flexDirection: "column", alignItems: "center", padding: "50px", backgroundColor: "tertiary.main" }}>
        <Card variant="outlined" sx={{ width: "100%" }}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Link style={{ color: "#EEEAEA" }} href="/">
              <Typography variant="subtitle1" sx={{ "&:hover": { color: "#C1FD35", } }}>Ver Tarjetas</Typography>
            </Link>
            <Link style={{ color: "#EEEAEA" }} href="/">
              <Typography variant="subtitle1" sx={{ "&:hover": { color: "#C1FD35", } }}>Ver CVU</Typography>
            </Link>
          </Box>
          <Typography variant="h4" sx={{ paddingLeft: "10px" }}>Dinero Disponible</Typography>
          <Typography variant="h1" sx={{ border: "2px solid #C1FD35", borderRadius: "100px", width: "auto", padding: "10px" }}>6.565.565,45 AR$</Typography>

        </Card>
        <Box sx={{ display: "flex", width: "100%", gap: "10px" }}>
          <Button sx={{ width: "50%" }} variant="xxl">Transferir Dinero</Button>
          <Button sx={{ width: "50%" }} variant="xxl">Ingresar dinero</Button>
        </Box>
        <form style={{ width: "100%" }} onSubmit={handleSearch}>
          <TextField
            variant="outlined"
            size="medium"
            sx={{ width: "100%", maxWidth: "100%", }}
            className={classes.textField}
            placeholder="Buscar en tu actividad"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ backgroundColor: "#FFF" }}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>
        <Box sx={{ width: "100%", backgroundColor: "#FFF", borderRadius: "10px" }}>
          <List sx={{ width: "100%", }}>
            <ListItem sx={{padding:"20px"}}>
              <Typography variant="h4" sx={{}}>Tu actividad</Typography>
            </ListItem>
            <ListItem alignItems="flex-start" sx={{flexDirection:"row", display:"flex"}}>
              <ListItemAvatar>
                <Avatar alt="R" sx={{ backgroundColor: "#C1FD35", color: "#000" }} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}
                primary="Transferiste a Rodrigo"
                secondary={
                  <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      -$ 1265,57
                    </Typography>
                    {"sábado"}
                  </Box>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" sx={{flexDirection:"row", display:"flex"}}>
              <ListItemAvatar>
                <Avatar alt="R" sx={{ backgroundColor: "#C1FD35", color: "#000" }} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}
                primary="Transferiste a Rodrigo"
                secondary={
                  <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      -$ 1265,57
                    </Typography>
                    {"sábado"}
                  </Box>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" sx={{flexDirection:"row", display:"flex"}}>
              <ListItemAvatar>
                <Avatar alt="R" sx={{ backgroundColor: "#C1FD35", color: "#000" }} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}
                primary="Transferiste a Rodrigo"
                secondary={
                  <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      -$ 1265,57
                    </Typography>
                    {"sábado"}
                  </Box>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" sx={{flexDirection:"row", display:"flex"}}>
              <ListItemAvatar>
                <Avatar alt="R" sx={{ backgroundColor: "#C1FD35", color: "#000" }} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}
                primary="Transferiste a Rodrigo"
                secondary={
                  <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      -$ 1265,57
                    </Typography>
                    {"sábado"}
                  </Box>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem sx={{padding:"20px"}} >
              <Link href="/" style={{display:"flex", width:"100%", justifyContent:"space-between", color:"#000"}}>
                <Typography variant="h4" sx={{}}>Ver toda tu actividad</Typography>
                <ArrowForwardIcon></ArrowForwardIcon>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

Inicio.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHome>{page}</LayoutHome>;
};

export default Inicio;

