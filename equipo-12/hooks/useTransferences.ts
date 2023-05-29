import axios from "axios";
import { useEffect, useState } from "react";
import { ITransference } from "../types";

const useTransferences = () => {
  const [transferences, setTransferences] = useState<ITransference[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const account = localStorage.getItem("accountId");

    const configTransferences = {
      method: "get",
      url: `https://digitalmoney.ctd.academy/api/accounts/${account}/transferences`,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    axios
      .request(configTransferences)
      .then((response) => {
        setTransferences(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [transferences]);

  return [transferences];
};

export default useTransferences;