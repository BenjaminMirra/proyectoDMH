import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircleIcon from "@mui/icons-material/Circle";
import { Button, ListItemText, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const GenerateListCard = (listCard: ListItemData[] | undefined) => {
    return listCard?.map((item) => (
      <>
        <ListItem key={item.account_id} >
          <ListItemAvatar>
            <CircleIcon color="secondary" fontSize="large" />
          </ListItemAvatar>
          <Typography paddingRight="10px">
            Terminada en 
          </Typography>
          <ListItemText secondary={item.number_id.toString().slice(-3)} />
          <ListItemIcon>
            <Button>
              Eliminar
            </Button>
          </ListItemIcon>
        </ListItem> 
        <Divider key={item.account_id}  variant="inset" component="li" sx={{ marginLeft:"20px", marginRight:"20px"}}/>
            </>
    ));
  }

  export default GenerateListCard;
