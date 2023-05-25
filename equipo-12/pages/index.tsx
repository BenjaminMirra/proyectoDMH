import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { Hero } from "../components/Hero/hero";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../layout/layout";

interface PropsType {
  children?: ReactElement;
}

const Home: NextPageWithLayout<PropsType> = ({ texts, images, cards }: any) => {
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
        <Hero texts={texts} images={images} cards={cards} />
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
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

    const transformedTexts = texts.map((text) => {
      const titles = text.titles.map((title: any) => title.title);
      return { titles };
    });

    const cards = await db
      .collection("cards")
      .find({})
      .sort({ metacritic: -1 })
      .limit(2)
      .toArray();

    const transformedCards = cards.map((card) => {
      const transformedData = {
        titles: card.cards.map((item: any) => ({
          title: item.title,
          description: item.description,
        })),
      };
      return transformedData;
    });

    const images = await db
      .collection("images")
      .find({})
      .sort({ metacritic: -1 })
      .limit(2)
      .toArray();

    return {
      props: {
        texts: transformedTexts,
        images: JSON.parse(JSON.stringify(images)),
        cards: transformedCards,
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
