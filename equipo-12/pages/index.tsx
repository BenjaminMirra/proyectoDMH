import Head from "next/head";
import Header from "./../components/Header/header";
import Footer from "./../components/Footer/footer";
import Hero from "../components/Hero/hero";
import clientPromise from "../lib/mongodb";


export default function Home({ images }: any) {
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
        <Hero images={images} />
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("images");

    const images = await db
      .collection("images")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

    return {
      props: { images: JSON.parse(JSON.stringify(images)) },
    };
  } catch (e) {
    console.error(e);
  }
}