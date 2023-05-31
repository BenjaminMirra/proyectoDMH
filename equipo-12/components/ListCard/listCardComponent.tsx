import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircleIcon from "@mui/icons-material/Circle";
import { ListItemText, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import DeleteCards from "./deleteCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUserData } from "../../context/createContext";

const GenerateListCard = (idAccount: number) => {
  const [listCard, setListCard] = useState<ListItemData[]>();
  const { account } = useUserData();

  const handleDelete = async (card_id: number, idAccount: number, list: ListItemData[]) => {
    try {
      const nuevaLista = list.filter(item => item.id !== card_id);
      const token = localStorage.getItem("token");
      const config = {
        method: "delete",
        url: `https://digitalmoney.ctd.academy/api/accounts/393/cards/${card_id}`,
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        }
      };
      axios.delete(config.url, config)
        .then((response) => {
          setListCard(nuevaLista);

        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Ocurrió un error al realizar la solicitud DELETE:", error);
    }
  };

  return listCard?.map((item) => (
    <>
      <ListItem sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        <ListItemAvatar>
          <CircleIcon color="secondary" fontSize="large" />
        </ListItemAvatar>
        < ListItemText primary={
          <Typography variant="body1">
            Terminada en {item.number_id.toString().slice(-3)}
          </Typography>}
        />
        <ListItemIcon >
          <DeleteCards refreshlista={handleDelete} list={listCard} data={item} />
        </ListItemIcon>
      </ListItem>
      <Divider variant="middle"></Divider>
    </>
  ));
};

export default GenerateListCard;
