import { FC, PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Footer from "../components/Footer/footer";
import HeaderLogin from "../components/Header/header-login";

const LayoutLogin: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
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