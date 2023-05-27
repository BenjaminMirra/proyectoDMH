import Box from "@mui/material/Box";
import TusDatos from "../../components/TusDatos/tusDatos";
import axios from "axios";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import Layout from "../../layout/layout";
import { NextPageWithLayout } from "../_app";
import BannerGestionPago from "../../components/GestionPago/banner-gestion-pago";
import AliasCVU from "../../components/AliasCVU/alias-cvu";
import { CircularProgress } from "@mui/material";

interface PropsType {
  children?: ReactNode;
}

const Perfil: NextPageWithLayout<PropsType> = () => {
  const [userInfo, setUserInfo] = useState();
  const [userAccount, setUserAccount] = useState();

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
    const configAccount = {
      method: "get",
      url: "https://digitalmoney.ctd.academy/api/account",
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
        console.log(error);
      });
    axios
      .request(configAccount)
      .then((response) => {
        setUserAccount(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userInfo, userAccount]);

  return (
    <>
      <Box
        sx={{
          width: "25%",
          height: "100%",
          backgroundColor: "#C1FD35",
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      ></Box>
      {userInfo && userAccount ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "80px",
            paddingRight: "80px",
            width: "100%",
            gap: "20px",
            paddingBottom: "40px",
            backgroundColor: "var(--light-grey)",
            paddingTop: "40px",
          }}
        >
          <TusDatos userInfo={userInfo} />
          <BannerGestionPago />
          <AliasCVU userAccount={userAccount} />
        </Box>
      ) : (
        <Box sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <CircularProgress sx={{
            color: "var(--lime-green)"
          }} />
        </Box>
      )}
    </>
  );
};

Perfil.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default Perfil;
