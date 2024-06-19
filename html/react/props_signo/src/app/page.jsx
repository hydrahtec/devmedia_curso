import styles from "./page.module.css";
import CardSigno from "@/components/cardSigno";

export default function Home() {
  return (
    <main className={styles.main}>
      <CardSigno
        signo='Aquário' image='/Aquario.jpg' 
        dataInicio='21/01' dataFim='19/02'
        link='/aquario'
      />
      <CardSigno
        signo='Peixes' image='/peixes.jpg' 
        dataInicio='20/02' dataFim='20/03'
        link='/peixes'
      />
      <CardSigno
        signo="Áries" dataInicio="21/03"
        dataFim="20/04" image="/aries.jpg"
        link='/aries'
      />
      <CardSigno
        signo="Touro" dataInicio="21/04"
        dataFim="21/05" image="/touro.jpg"
        link='/touro'
      />
      <CardSigno
        signo="Gêmeos" dataInicio=" 22/05"
        dataFim="21/06" image="/gemeos.jpg"
        link='/gemeos'
      />
      <CardSigno
        signo="Câncer" dataInicio="21/06"
        dataFim="23/07" image="/cancer.jpg"
        link='/cancer'
      />
      <CardSigno
        signo="Leão" dataInicio="24/07"
        dataFim="23/08" image="/leao.jpg"
        link='/leao'
      />
      <CardSigno
        signo="Virgem" dataInicio="24/08"
        dataFim="23/09" image="/virgem.jpg"
        link='/virgem'
      />
      <CardSigno
        signo="Libra" dataInicio="24/09"
        dataFim="23/10" image="/libra.jpg" 
        link='/libra'
      />
      <CardSigno
        signo="Escorpião" dataInicio="24/10"
        dataFim="22/11" image="/escorpiao.jpg" 
        link='/escorpiao'
      />
      <CardSigno
        signo="Sagitário" dataInicio="23/11"
        dataFim="21/12" image="/sagitario.jpg" 
        link='/sagitario'
      />
      <CardSigno
        signo="Capricórnio" dataInicio="22/12"
        dataFim="20/01" image="/capricornio.jpg" 
        link='/capricornio'
      />
    </main>
  );
}
