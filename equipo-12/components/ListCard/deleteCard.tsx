import { Button } from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";


interface Props {
  data: ListItemData
  list: ListItemData[]
  refreshlista: (card_id: number, idAccount: number,list: ListItemData[]  ) => void
}

const DeleteCards :  FC<Props> = ({ data, list, refreshlista }: Props) => {
  const [idAccount, setIdAccount] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios("https://digitalmoney.ctd.academy/api/account", {
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      setIdAccount(response.data?.id);
    });
  }, [idAccount]);

  return (
    <>
      <Button
        id="BotonEliminar"
        variant="primary"
        color="secondary"
        size="large"
        type="submit"
        sx={{
          marginTop: "none",
          border: "none",
          backgroundColor: "transparent",
          boxShadow: "none"
        }}
        onClick={() => refreshlista(data.id,idAccount,list)}              
      >Eliminar</Button>    
    </>             
  );
};

export default DeleteCards;