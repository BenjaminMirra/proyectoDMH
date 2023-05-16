import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { Hero } from "../components/Hero/hero";
import LayoutHome from "../layout/layout-home";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout<any> = ({ texts, images, cards }: any) => {

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
        }}>
        <Hero texts={texts} images={images} cards={cards} />
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHome>{page}</LayoutHome>;
};

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("data");

    const texts = await db
      .collection("texts")
      .find({})
      .sort({ metacritic: -1 })
      .limit(2)
      .toArray();

    const cards = await db
      .collection("cards")
      .find({})
      .sort({ metacritic: -1 })
      .limit(2)
      .toArray();

    const images = await db
      .collection("images")
      .find({})
      .sort({ metacritic: -1 })
      .limit(2)
      .toArray();

    return {
      props: {
        texts: JSON.parse(JSON.stringify(texts)),
        images: JSON.parse(JSON.stringify(images)),
        cards: JSON.parse(JSON.stringify(cards)),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { ok: false, reason: "No se puede acceder a la Base de Datos" },
    };
  }
}

export default Home;