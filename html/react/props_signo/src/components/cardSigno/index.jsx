import style from './CardSigno.module.css';
import Image from "next/image";
import Link from "next/link";


export default function CardSigno(props) {
    return (
        <div className={style.card}>
        <h3>{props.signo}</h3>
        <Image src={props.image} width='100' height = '100' alt=''/>
        <p>{`As pessoas que nascem entre ${props.dataInicio} - ${props.dataFim} são classificados como ${props.signo}`}</p>
        <Link className={style.link_info} href={props.link}>Saiba mais</Link>
      </div>
    );
};