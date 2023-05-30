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

    const configAccount = {
      method: "get",
      url: "https://digitalmoney.ctd.academy/api/account",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    axios
      .request(configAccount)
      .then((response) => {
        setUserAccount(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userAccount]);

  return [userAccount];
};

export default useAccount;