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
<<<<<<< HEAD
  const { account } = useUserData();
=======
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
          console.log("id_account " + idAccount);
          console.log("id_account " + JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
>>>>>>> f786ce9fb4bdd7a596b08c3f9b5ad59f36b2360a

  const handleDelete = async (card_id: number, idAccount: number, list: ListItemData[]) => {
    try {
      const nuevaLista = list.filter(item => item.id !== card_id);
      const token = localStorage.getItem("token");
      const config = {
        method: "delete",
<<<<<<< HEAD
        url: `https://digitalmoney.ctd.academy/api/accounts/393/cards/${card_id}`,
=======
        url: `https://digitalmoney.ctd.academy/api/accounts/${idAccount}/cards/${card_id}`,
>>>>>>> f786ce9fb4bdd7a596b08c3f9b5ad59f36b2360a
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        }
      };
      axios.delete(config.url, config)
        .then((response) => {
<<<<<<< HEAD
=======
          console.log(response);
>>>>>>> f786ce9fb4bdd7a596b08c3f9b5ad59f36b2360a
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
<<<<<<< HEAD
        < ListItemText primary={
          <Typography variant="body1">
            Terminada en {item.number_id.toString().slice(-3)}
          </Typography>}
        />
        <ListItemIcon >
=======
        <Typography paddingRight="10px">
          Terminada en
        </Typography>
        <ListItemText secondary={item.number_id.toString().slice(-3)} />
        <ListItemIcon>
>>>>>>> f786ce9fb4bdd7a596b08c3f9b5ad59f36b2360a
          <DeleteCards refreshlista={handleDelete} list={listCard} data={item} />
        </ListItemIcon>
      </ListItem>
      <Divider variant="middle"></Divider>
    </>
  ));
};

export default GenerateListCard;
