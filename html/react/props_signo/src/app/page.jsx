import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h3>Titulo</h3>
        <img src="../aquario.jpg" alt="teste" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    </main>
  );
}
