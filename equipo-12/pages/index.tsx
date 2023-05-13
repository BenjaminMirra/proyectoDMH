import Head from "next/head";
import Header from "./../components/Header/header";
import Footer from "./../components/Footer/footer";
import Hero from "../components/Hero/hero";

export default function Home() {
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
        <Hero />
        <Footer />
      </main>
    </>
  );
}
