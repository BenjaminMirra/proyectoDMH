import axios from "axios";
import { useEffect, useState } from "react";
import { IService } from "../types";

export const useServices = () => {
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const account = localStorage.getItem("accountId");
    const configTransferences = {
      method: "get",
      url: `https://digitalmoney.ctd.academy/service`,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    axios
      .request(configTransferences)
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return [services];
};
