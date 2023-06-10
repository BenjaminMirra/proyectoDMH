import axios from "axios";
import { useEffect, useState } from "react";
import { IAccount } from "../types";

const useAccount = () => {
  const [userAccount, setUserAccount] = useState<IAccount>({
    alias: "",
    available_amount: "",
    cvu: "",
    id: 0,
    user_id: 0
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        const configAccount = {
          method: "get",
          url: "https://digitalmoney.ctd.academy/api/account",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        };
        const response = await axios.request(configAccount);
        setUserAccount(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Realiza la llamada a la API al montar el componente

  }, []); // Sin dependencias para que solo se ejecute una vez al montar el componente

  return [userAccount, setUserAccount];
};

export default useAccount;