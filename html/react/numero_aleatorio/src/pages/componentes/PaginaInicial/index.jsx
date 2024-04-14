import { useState } from 'react'
import style from './PaginaInicial.module.css'

export const PaginaInicla = () => {
    let [numeroAleatorio, SetNumeroAleatorio] = useState(0);

    function gerarNumero () {
        let geranumero = Math.floor(Math.random * 100);

        SetNumeroAleatorio = geranumero;
    }

    return (

        <section className={style.conteudo_centralizado}>
            <h3>Número aleatório de 1 a 100</h3>            
            <h1>{numeroAleatorio}</h1>

            <div className={style.area_botao}>
                <label>
                    Clique no botão abaixo para gerar um número
                </label>

                <button onClick={gerarNumero}>
                    Gerar Número
                </button>
            </div>
        </section>
    )
};