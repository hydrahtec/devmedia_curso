import Head from "next/head";
import style from '@/styles/Home.module.css'
import { Troca_bg } from "./components/Troca_bg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Troca de bg</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
      <Troca_bg />
      </main>
    </>
  );
}
