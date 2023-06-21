import { Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Link from "next/link";
import { IService } from "../../types";
import LiveTvIcon from "@mui/icons-material/LiveTv";

type Props = {
  service: IService;

}

const ItemService = ({ service }: Props) => {
  return (
    <Link href={`/?/${service.id}`}
      style={{ textDecoration: "none", color: "unset" }}>
      <ListItem alignItems="flex-start"
        sx={{ display: "flex", alignItems: "center", "&:hover": { backgroundColor: "#EEEAEA", }, }}>
        <ListItemAvatar>
          <LiveTvIcon sx={{ backgroundColor: "#C1FD35", color: "#000" }} />
        </ListItemAvatar>
        <ListItemText
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          primary={service.name}
        >
        </ListItemText>
        <Button>Seleccionar</Button>
      </ListItem>
    </Link>
  );
};

export default ItemService;