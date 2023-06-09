import Box from "@mui/material/Box";
import TusDatos from "../../components/TusDatos/tusDatos";
import { ReactElement, ReactNode, useEffect } from "react";
import Layout from "../../layout/layout";
import { NextPageWithLayout } from "../_app";
import BannerGestionPago from "../../components/GestionPago/banner-gestion-pago";
import AliasCVU from "../../components/AliasCVU/alias-cvu";
import { CircularProgress } from "@mui/material";
import useUser from "../../hooks/useUser";
import ArrowSubtitleMobile from "../../components/ArrowSubtitleMobile";
import { useUserData } from "../../context/createContext";
import useAccount from "../../hooks/useAccount";
import Head from "next/head";
interface PropsType {
  children?: ReactNode;
}

const Perfil: NextPageWithLayout<PropsType> = () => {
  const [userInfo] = useUser();
  const [userAccount] = useAccount();

  return (
    <>
      <Head>
        <title>Digital Money House</title>
        <meta name="description" content="Digital Money House" />
      </Head>
      <Box
        sx={{
          width: "276px",
          height: "100%",
          backgroundColor: "#C1FD35",
          "@media (max-width: 768px)": {
            display: "none",
          },
          "@media (min-width: 768px)": {
            display: "block",
            maxWidth: "220px",
          },
          "@media (min-width: 1024px)": {
            display: "block",
            maxWidth: "275px",
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
            width: "100%",
            gap: "20px",
            backgroundColor: "var(--light-grey)",
            "@media (max-width: 768px)": {
              padding: "20px",
              paddingTop: "50px",
            },
            "@media (min-width: 768px)": {
              padding: "50px",
              paddingLeft: "100px",
            },
          }}
        >
          <ArrowSubtitleMobile title="Tarjetas" />
          <TusDatos userInfo={userInfo} />
          <BannerGestionPago />
          <AliasCVU account={userAccount} />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            sx={{
              color: "var(--lime-green)",
            }}
          />
        </Box>
      )}
    </>
  );
};

Perfil.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default Perfil;
