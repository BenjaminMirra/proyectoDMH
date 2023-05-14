import Head from "next/head";
import Header from "./../components/Header/header";
import Footer from "./../components/Footer/footer";
import Hero from "../components/Hero/hero";
import clientPromise from "../lib/mongodb";

export default function Home({ texts, images, cards }: any) {

  return (
    <>
      <Head>
        <title>Digital Money House</title>
        <meta name="description" content="Digital Money House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero texts={texts} images={images} cards={cards} />
        <Footer />
      </main>
    </>
  );
}

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
        cards: JSON.parse(JSON.stringify(cards))
      }
    };
  } catch (e) {
    console.error(e);
  }
}