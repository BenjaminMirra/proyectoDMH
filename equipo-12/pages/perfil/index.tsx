import Box from "@mui/material/Box";
import TusDatos from "../../components/TusDatos/tusDatos";
import { ReactElement, ReactNode } from "react";
import Layout from "../../layout/layout";
import { NextPageWithLayout } from "../_app";
import BannerGestionPago from "../../components/GestionPago/banner-gestion-pago";
import AliasCVU from "../../components/AliasCVU/alias-cvu";
import { CircularProgress, Typography } from "@mui/material";
import useUser from "../../hooks/useUser";
import useAccount from "../../hooks/useAccount";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowSubtitleMobile from "../../components/ArrowSubtitleMobile";
import { useUserData } from "../../context/createContext";
interface PropsType {
  children?: ReactNode;
}

const Perfil: NextPageWithLayout<PropsType> = () => {
  const [userInfo] = useUser();
  const { account } = useUserData();

  return (
    <>
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

      {userInfo && account ? (
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
            },
            "@media (min-width: 768px)": {
              padding: "50px",
            },
          }}
        >
          <ArrowSubtitleMobile title="Tarjetas" />
          <TusDatos userInfo={userInfo} />
          <BannerGestionPago />
          <AliasCVU userAccount={account} />
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
