import { FC, PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import HeaderHome from "../components/Header/header-home";
import HeaderLogin from "../components/Header/header-login";
import HeaderRegister from "../components/Header/header-register";
import Footer from "../components/Footer/footer";

type LayoutVariant = "home" | "login" | "register";

interface Props extends PropsWithChildren<any> {
  variant: LayoutVariant;
}

const Layout: FC<Props> = ({ variant, children }: Props) => {
  let HeaderComponent;

  switch (variant) {
    case "home":
      HeaderComponent = HeaderHome;
      break;
    case "login":
      HeaderComponent = HeaderLogin;
      break;
    case "register":
      HeaderComponent = HeaderRegister;
      break;
    default:
      HeaderComponent = null;
      break;
  }

  return (
    <>
      <Stack direction="column" height="100%">
        {HeaderComponent && <HeaderComponent />}
        <Box display="flex" flexGrow={1} justifyContent="center">
          {children}
        </Box>
        <Footer />
      </Stack>
    </>
  );
};

export default Layout;