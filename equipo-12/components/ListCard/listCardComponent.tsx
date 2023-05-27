import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircleIcon from "@mui/icons-material/Circle";
import { Button, ListItemText, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import DeleteCards from "./deleteCard";
import { useEffect, useState } from "react";
import axios from "axios";
import router from "next/router";

const GenerateListCard = (idAccount: number) => {
    const [listCard, setListCard] = useState<ListItemData[]>();

    useEffect(() => {
        if (localStorage.getItem("userId") !== null) {
            const token = localStorage.getItem("token");
            const config = {
                method: "get",
                url: `https://digitalmoney.ctd.academy/api/accounts/393/cards`,
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
                    router.push("/");
                });
        }
    }, []);

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
                    <DeleteCards data={item} />
                </ListItemIcon>
            </ListItem>
            <Divider key={item.account_id} variant="inset" component="li" sx={{ whith: "90%", marginLeft: "20px", marginRight: "20px" }} />
        </>
    ));
}

export default GenerateListCard;
