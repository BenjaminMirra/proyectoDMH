import { Box, Button } from "@mui/material";
import { ReactElement } from "react";
import Layout from "../../layout/layout";
import AvailableAmount from "../../components/AvailableAmount";
import Transferences from "../../components/Transferences";


const Inicio = () => {

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
        }}
      ></Box>
      <Box sx={{ display: "flex", width: "100%" }}>

        <Box sx={{ width: "100%", gap: "10px", display: "flex", flexDirection: "column", alignItems: "center", padding: "50px", backgroundColor: "tertiary.main" }}>
          <AvailableAmount></AvailableAmount>
          <Box sx={{ display: "flex", width: "100%", gap: "10px" }}>
            <Button sx={{ width: "50%" }} variant="xxl">Transferir Dinero</Button>
            <Button sx={{ width: "50%" }} variant="xxl">Ingresar dinero</Button>
          </Box>
          <Transferences></Transferences>
        </Box>
      </Box>
    </>
  );
};

Inicio.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default Inicio;