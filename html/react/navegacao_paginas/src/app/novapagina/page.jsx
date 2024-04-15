import Link from 'next/link';
import style from './novapagina.module.css';

export default function NovaPagina() {

    return (
        <main className={style.main_container}>
            <div className={style.card_container}>
                <h1>Nova página</h1>
                <p>Éssa é a nova pagina da aplicação</p>
                <p>Éssa é nossa primeira página criada no react</p>
                <Link
                    href='/'
                >
                    Pagina inicial
                </Link>
            </div>
        </main>

    )
};