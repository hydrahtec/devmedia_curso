import style from './CardSigno.module.css';
import Image from "next/image";
import Link from "next/link";


export default function CardSigno(props) {
    return (
        <div className={style.card}>
        <h3>Titulo</h3>
        <Image src="/aquario.jpg" width='100' height = '100' alt=''/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <Link className={style.link_info} href='/' target='_blank'/>
      </div>
    );
};