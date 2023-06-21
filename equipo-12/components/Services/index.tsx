import { Search } from "@mui/icons-material";
import { TextField, InputAdornment, Box, Link, List, ListItem, Typography} from "@mui/material";
import { useStyles } from "../../material-theme";
import ListService from "./listService";

const Services = () => {
  const classes = useStyles();
  
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  
  return (
    <>
      <form style={{ width: "100%", borderRadius: "10px" }} onSubmit={handleSearch}>
        <TextField
          size="medium"
          sx={{ width: "100%", maxWidth: "100%", backgroundColor: "#FFF", }}
          className={classes.textFieldFilter}
          placeholder="Buscar entre más de 5.000 empresas"
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
            <Typography variant="h4" sx={{}}>Más recientes</Typography>
          </ListItem>
          <ListService></ListService>
        </List>
      </Box>
    </>
  );
};

export default Services;