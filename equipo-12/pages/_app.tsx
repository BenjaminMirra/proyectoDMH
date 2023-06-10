import "../globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../material-theme";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import UseContextProvider from "../provider/userProvider";
import { UserProvider } from "../context/createContext";
import { UserProviderNew } from "../context/userContext";


export type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<unknown>;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <UserProviderNew>
          <UseContextProvider>
            {getLayout(<Component {...pageProps} />)}
          </UseContextProvider>
        </UserProviderNew>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
