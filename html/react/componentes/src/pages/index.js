import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { Topo } from "./componentes/Topo";
import { Card } from "./componentes/Card";
import { Rodape } from "./componentes/Rodape";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hydrah Tec | componentes react</title>
        <meta name="description" content="projeto de introdução a componentes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topo />
      <main className={`${styles}`}>
        <Card />
        <Card />
        <Card />
      </main>
      <Rodape />
    </>
  );
}
