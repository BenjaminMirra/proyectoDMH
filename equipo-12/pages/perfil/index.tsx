import Box from "@mui/material/Box";
import TusDatos from "../../components/TusDatos/tusDatos";
import axios from "axios";
import { useEffect, useState } from "react";

const Perfil = () => {

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const config = {
      method: "get",
      url: `https://digitalmoney.ctd.academy/api/users/${userId}`,
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
    };

    axios.request(config)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userInfo]);

  return (
    <>
      {
        userInfo ?
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }
          } >
            <TusDatos userInfo={userInfo} />
          </Box >
          :
          <>
          </>}
    </>
  );
};

export default Perfil;