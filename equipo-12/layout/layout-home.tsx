import { Box, Stack } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/footer";
import HeaderHome from "../components/Header/header-home";
import LateralMenu from "../components/LateralMenu/lateralMenu";
import { useState } from "react";
interface Props {
  children: React.ReactNode
}

const LayoutHome = ({ children }: Props) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <Stack direction={"column"} height={"100%"}>
        <HeaderHome setVisibility={setVisibility} />
        <LateralMenu visibility={visibility} setVisibility={setVisibility}/>
        <Box display={"flex"} flexGrow={1} justifyContent={"center"}>
          {children}
        </Box>
        <Footer />
      </Stack>
    </>
  );
};
