import { useState } from 'react';
import style from './Troca_bg.module.css';

export const Troca_bg = () => {
    let [nova_bg, setNova_bg] = useState(style.bg_vermelho);

    function trocaCor () {
        let novaCor = nova_bg != style.bg_vermelho ? style.bg_vermelho : style.bg_azul;
        setNova_bg(novaCor);
    }
    return (
        <section className={style.secao}>
            <div className= {nova_bg}></div>
            <div className={style.conteudo}>
                <p>Clique no botão abaixo para mudar a o fundo do quadrado</p>
                <button className={style.botao} onClick={trocaCor}>Trocar fundo</button>
            </div>
        </section>
    )
};