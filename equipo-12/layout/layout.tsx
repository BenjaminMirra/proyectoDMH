import { FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import HeaderLogin from "../components/Header/header-login";
import HeaderRegister from "../components/Header/header-register";
import Footer from "../components/Footer/footer";
import LateralMenu from "../components/LateralMenu/lateralMenu";
import { useUserData } from "../context/createContext";
import HeaderHome from "../components/Header/header-home";

type LayoutVariant = "home" | "login" | "register";

interface Props extends PropsWithChildren<any> {
  variant: LayoutVariant;
}

const Layout: FC<Props> = ({ variant, children }: Props) => {
  const [visibility, setVisibility] = useState(false);
  const [headerDisplayed, setHeaderDisplayed] = useState(<HeaderHome />);

  useEffect(() => {
    if (variant === "home") {
      setHeaderDisplayed(
        <>
          <HeaderHome setVisibility={setVisibility} />
          <LateralMenu visibility={visibility} setVisibility={setVisibility} />
        </>
      );
    } else if (variant === "login") {
      setHeaderDisplayed(<HeaderLogin />);
    } else if (variant === "register") {
      setHeaderDisplayed(<HeaderRegister />);
    }
  }, [variant, visibility]);


  return (
    <>
      <Stack direction="column" height="100%">
        {headerDisplayed}
        <Box display="flex" flexGrow={1} justifyContent="center">
          {children}
        </Box>
        <Footer />
      </Stack>
    </>
  );
};

export default Layout;