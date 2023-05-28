import Box from "@mui/material/Box";
import TusDatos from "../../components/TusDatos/tusDatos";
import axios from "axios";
import { ReactElement, ReactNode, useEffect } from "react";
import Layout from "../../layout/layout";
import { NextPageWithLayout } from "../_app";
import BannerGestionPago from "../../components/GestionPago/banner-gestion-pago";
import AliasCVU from "../../components/AliasCVU/alias-cvu";
import { CircularProgress } from "@mui/material";
import useUser from "../../hooks/useUser";
import useAccount from "../../hooks/useAccount";

interface PropsType {
  children?: ReactNode;
}

const Perfil: NextPageWithLayout<PropsType> = () => {
  const [userInfo] = useUser();
  const [userAccount] = useAccount();

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
            color: "var(--lime-green)",
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
