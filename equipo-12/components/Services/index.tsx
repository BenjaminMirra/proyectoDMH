import { Search } from "@mui/icons-material";
import { TextField, InputAdornment, Box, List, ListItem, Typography} from "@mui/material";
import { useStyles } from "../../material-theme";
import ListService from "./listService";
import { useState } from "react";

const Services = () => {
  const classes = useStyles();

  const [search, setSearch] = useState("");
  
  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };  
  return (
    <>
   
      <Box sx={{ width: "100%", backgroundColor: "#FFF", borderRadius: "10px", boxShadow: "0px 4px 4px #0000004c", }}>
        <List sx={{ width: "100%", }}>
          <ListItem sx={{ padding: "20px" }}>
            <Typography variant="h4" sx={{}}>Más recientes</Typography>
          </ListItem>
          <ListService search={search}></ListService>
        </List>
      </Box>
    </>
  );
};
export default Services;
