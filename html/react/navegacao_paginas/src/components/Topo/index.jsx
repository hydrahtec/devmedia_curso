import Image from 'next/image';
import Logo from '../../../public/vercel.svg';
import style from './Topo.module.css';

export const Topo = () => {
    return (
        <div className={style.topo}>
            <Image src={Logo} alt='Vercel logo' className={style.image}/>
            <h1>Topo</h1>
        </div>
    )
};
