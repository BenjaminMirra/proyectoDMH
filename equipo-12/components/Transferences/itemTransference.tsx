import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Link from "next/link";
import { ITransference } from "../../data";

type Props = {
    transference : ITransference;

}

const ItemTranference = ({transference}:Props) => {
  return (
    <Link href={`/transferencias/${transference.id}`}  
      style={{textDecoration:"none", color:"unset" }}>
      <ListItem alignItems="flex-start" 
        sx={{ display: "flex", alignItems: "center","&:hover": {backgroundColor: "#EEEAEA",}, }}>
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
    </Link>
  );
};

export default ItemTranference;