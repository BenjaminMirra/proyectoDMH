import axios from "axios";
import { useEffect, useState } from "react";

const useAccount = () => {

  const [userAccount, setUserAccount] = useState();

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