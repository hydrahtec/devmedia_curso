import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>
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
