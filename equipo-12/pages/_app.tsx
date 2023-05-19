import "../globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../material-theme";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import UseContextProvider from "../provider/userProvider";

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
      <UseContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </UseContextProvider>
    </ThemeProvider>
  );
}

export default App;
