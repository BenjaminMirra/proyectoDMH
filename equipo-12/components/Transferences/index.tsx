import Link from "next/link";
import { Search } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TextField, InputAdornment, Box, List, ListItem, Typography, ListItemAvatar, Avatar, ListItemText, Divider } from "@mui/material";
import { useStyles } from "../../material-theme";
import useTransferences from "../../hooks/useTransferences";

const Transferences = () => {
  const classes = useStyles();

  const [transferences] = useTransferences();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const staticData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



  return (
    <>
      <form style={{ width: "100%" }} onSubmit={handleSearch}>
        <TextField
          size="medium"
          sx={{ width: "100%", maxWidth: "100%", backgroundColor: "#FFF", }}
          className={classes.textField}
          placeholder="Buscar en tu actividad"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ backgroundColor: "#FFF" }}>
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </form>
      <Box sx={{ width: "100%", backgroundColor: "#FFF", borderRadius: "10px", boxShadow: "0px 4px 4px #0000004c", }}>
        <List sx={{ width: "100%", }}>
          <ListItem sx={{ padding: "20px" }}>
            <Typography variant="h4" sx={{}}>Tu actividad</Typography>
          </ListItem>
          {
            staticData.map(() => {

              return (
                <>
                  <ListItem alignItems="flex-start" sx={{ display: "flex", alignItems: "center" }}>
                    <ListItemAvatar>
                      <Avatar alt="R" sx={{ backgroundColor: "#C1FD35", color: "#000" }} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                      primary="Transferiste a Rodrigo"
                    >

                    </ListItemText>
                    <ListItemText
                      sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }}
                      primary="-$ 1265,57"
                      secondary="sabado"
                    />
                  </ListItem>
                  <Divider variant="middle"></Divider>
                </>
              );
            })
          }
          <ListItem sx={{ padding: "20px" }} >
            <Link href="/inicio" style={{ display: "flex", width: "100%", justifyContent: "space-between", color: "#000" }}>
              <Typography variant="h4" sx={{}}>Ver toda tu actividad</Typography>
              <ArrowForwardIcon></ArrowForwardIcon>
            </Link>
          </ListItem>
        </List>
      </Box>
    </>

  );
};

export default Transferences;