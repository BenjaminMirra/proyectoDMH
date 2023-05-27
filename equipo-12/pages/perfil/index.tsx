import Box from "@mui/material/Box";
import TusDatos from "../../components/TusDatos/tusDatos";
import axios from "axios";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import Layout from "../../layout/layout";
import { NextPageWithLayout } from "../_app";

interface PropsType {
  children?: ReactNode;
}

const Perfil: NextPageWithLayout<PropsType> = () => {

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
      <Box sx={{
        width: "25%", height: "100%", backgroundColor: "#C1FD35",
        "@media (max-width: 768px)": {
          display: "none"
        },
      }}>

      </Box>
      {
        userInfo ?
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
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

Perfil.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default Perfil;