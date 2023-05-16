import { Box, Stack } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/footer";
import HeaderLogin from "../components/Header/header-login";
interface Props {
  children: React.ReactNode
}

const LayoutLogin = ({ children }: Props) => {
  return (
    <>
      <Stack direction={"column"} height={"100%"}>
        <HeaderLogin />
        <Box display={"flex"} flexGrow={1} justifyContent={"center"}>
          {children}
        </Box>
        <Footer />
      </Stack>
    </>
  );
};

export default LayoutLogin;