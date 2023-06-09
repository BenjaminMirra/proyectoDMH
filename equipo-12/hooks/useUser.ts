import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../types";

const useUser = () => {
  const [userInfo, setUserInfo] = useState<IUser>({
    firstname: "",
    lastname: "",
    phone: "",
    dni: 0,
    email: "",
    password: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const configInfo = {
      method: "get",
      url: `https://digitalmoney.ctd.academy/api/users/${userId}`,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    axios
      .request(configInfo)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return [userInfo];
};

export default useUser;
