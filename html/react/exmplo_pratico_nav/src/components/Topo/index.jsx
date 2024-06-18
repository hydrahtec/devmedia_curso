import Link from 'next/link';
import style from './Topo.module.css';


export default function Topo() {
    return (
        <header className={style.container_topo}>
            <h1>Navegação React</h1>
            <nav>
                <Link className={style.link_frontend} href="/frontend">Front-end</Link>
                <Link className={style.link_backend} href="/backend">Back-end</Link>
                <Link className={style.link_mobile} href="/mobile">Mobile</Link>
            </nav>
        </header>
    );
};
