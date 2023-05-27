import { Button } from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";
const handleDelete = async (card_id: number, idAccount: number  ) => {
  try {  
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
        
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
      console.error("Ocurrió un error al realizar la solicitud DELETE:", error);
  }
};

interface Props {
  data: ListItemData
}

const DeleteCards :  FC<Props> = ({ data }: Props) => {
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
        variant="primary"
        color="secondary"
        size="large"
        type="submit"
        sx={{
          marginTop: "10px",
        }}
        onClick={() => handleDelete(data.id,idAccount)}              
      >Eliminar</Button>    
    </>             
  );
};

export default DeleteCards;