import Link from "next/link";
import styles from "./page.module.css";

import { Topo } from "@/components/Topo";

export default function Home() {
  return (
    <>
      <Topo />
      <main className={styles.main}>
        <div className={styles.card_container}>
          <h1>Página inicial</h1>
          <p>Éssa é a pagina principal da aplicação react</p>
          <p>Essa página é gerada automaticamente</p>
          <Link href='/novapagina'>nova pagina</Link>
        
        </div>
      </main>
      </>
  );
}
