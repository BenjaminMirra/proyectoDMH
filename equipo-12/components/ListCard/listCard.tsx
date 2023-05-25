import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import Divider from "@mui/material/Divider";

function generate(element: React.ReactElement) {
  return [0, 1, 2,3,4,5,6,7,8,9,10].map((value) =>
    React.cloneElement(element, {
      key: value,
      value: value, // Agrega el valor como una prop llamada 'value'
    }),
  );
}

const ListCard = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  
}));

export default function InteractiveList() {
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={40}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Tarjetas
        </Typography>
        <Divider />
        <ListCard>
          <List>
            {generate(
              <><ListItem>
                <ListItemAvatar>
                  <CircleIcon color="secondary" fontSize="large" />
                </ListItemAvatar>
                <ListItem>
                  <Typography>Terminada en valor </Typography>
                </ListItem>
                <ListItemIcon>Siguiente</ListItemIcon>
              </ListItem> <Divider /></>,
            )}
          </List>
        </ListCard>
      </Grid>
    </Grid>
  );
}