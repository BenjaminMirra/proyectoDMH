import { FC, PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Header from "../components/Header/header-register";
import Footer from "../components/Footer/footer";

const LayoutRegister: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      <Stack direction={"column"} height={"100%"}>
        <Header />
        <Box display={"flex"} flexGrow={1} justifyContent={"center"}>
          {children}
        </Box>
        <Footer />
      </Stack>
    </>
  );
};
export default LayoutRegister;
