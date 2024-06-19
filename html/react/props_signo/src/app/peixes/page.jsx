import style from './Peixe.module.css';

import Image from 'next/image';;
import Link from 'next/link';;

export default function Peixe() {
    return (
        <main className={style.main}>
            <div className={style.page}>
                <h1>Peixe</h1>
                <Image src="/peixe.jpg" width='300' height = '300' alt=''/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati excepturi. Aspernatur dolores ea vel temporibus, ipsum distinctio modi. Quae quibusdam nobis architecto quo aut corrupti sint aliquam nostrum neque!</p>
                <Link className='link_home' href='/'>Voltar</Link>
            </div>
        </main>
    );

}