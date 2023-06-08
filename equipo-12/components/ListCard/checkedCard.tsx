import { Button, Radio } from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";


interface Props {
  selectid: number
  data: ListItemData
  list: ListItemData[]
  refreshlista: (card_id: number) => void
}

const CheckedCards :  FC<Props> = ({selectid ,data, refreshlista }: Props) => {
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
      <Radio
        checked={data.id === selectid}
        onChange={() => refreshlista(data.id)}    
        value={data.id}
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
      />    
    </>             
  );
};

export default CheckedCards;