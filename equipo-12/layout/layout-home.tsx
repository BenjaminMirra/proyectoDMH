import { Box, Stack } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/footer";
import HeaderHome from "../components/Header/header-home";
import LateralMenu from "../components/LateralMenu/lateralMenu";
interface Props {
  children: React.ReactNode
}

const LayoutHome = ({ children }: Props) => {
  return (
    <>
      <Stack direction={"column"} height={"100%"}>
        <HeaderHome />
        <LateralMenu/>
        <Box display={"flex"} flexGrow={1} justifyContent={"center"}>
          {children}
        </Box>
        <Footer />
      </Stack>
    </>
  );
};

export default LayoutHome;