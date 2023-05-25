import Head from "next/head";
import LayoutHome from "../../layout/layout-home";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./../_app";
import AddCard from "../../components/ListCard/addCard";
import ListCard from "../../components/ListCard/listCard";



interface PropsType {
    children?: ReactElement;
  }
  
const ListCards: NextPageWithLayout<PropsType> = ({ texts, images, cards }: any) => {
  return (
    <>
      <Head>
        <title>Digital Money House</title>
        <meta name="description" content="Digital Money House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          padding: "0px",
          margin: "0 auto",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#201F22",
        }}
      >
        <AddCard />
        <ListCard />
      </main>
    </>
  );
};


  
ListCards.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHome>{page}</LayoutHome>;
};

export default ListCards;
