import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircleIcon from "@mui/icons-material/Circle";
import { Button, ListItemText, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import DeleteCards from "./deleteCard";
import { useEffect, useState } from "react";
import axios from "axios";

const GenerateListCard = (idAccount: number) => {
  const [listCard, setListCard] = useState<ListItemData[]>();
  useEffect(() => {
    if (localStorage.getItem("userId") !== null) {
      const token = localStorage.getItem("token");
      const config = {
        method: "get",
        url: "https://digitalmoney.ctd.academy/api/accounts/393/cards",
        headers: {
          Authorization: token,
        },
        data: "",
      };
      axios
        .request(config)
        .then((response) => {
          setListCard(
            response.data
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleDelete = async (card_id: number, idAccount: number, list: ListItemData[]) => {
    try {
      const nuevaLista = list.filter(item => item.id !== card_id);
      const token = localStorage.getItem("token");
      const config = {
        method: "delete",
        url: `https://digitalmoney.ctd.academy/api/accounts/${idAccount}/cards/${card_id}`,
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
/*
*/

/**
 *      <ListItem key={item.account_id} >
        <ListItemAvatar>
          
        </ListItemAvatar>
       
       
      </ListItem>
      <Divider key={item.account_id} variant="inset" component="li" sx={{ whith: "90%", marginLeft: "20px", marginRight: "20px" }} />

 * 
 * 
 */