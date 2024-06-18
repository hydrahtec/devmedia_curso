import Link from "next/link";
import style from './Topo.module.css';

export default function Topo() {
    return(
        <header className={style.header}>
            <h1>Signos do horoscopo</h1>
            <Link className={style.link_home} href='/'>Home</Link>
        </header>
    );
};