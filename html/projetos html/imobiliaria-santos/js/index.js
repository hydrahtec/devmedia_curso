// LGPD
let lgpdHtml = `
<div class="lgpd">
    <div class="lgpd_left">
      <h2>Aviso de Cookies</h2>
      <p>Utilizamos cookies para oferecer a melhor experiencia e analisar o uso do nosso site. Para mais informacoes, consulte a nossa <a href="../media/Politica-de-Privacidade.pdf" title="polica de privacidade">Política de Privacidade</a></p>
    </div>
    <div class="lgpd_rigth">
      <button type="button" title="fechar">Fechar</button>
    </div>
  </div>
`
let lsContent = localStorage.getItem('lgpd');

if (!lsContent) {
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector(".lgpd");
    let buttonlgpd = lgpdArea.querySelector('button');

    buttonlgpd.addEventListener('click', () => {
        lgpdArea.remove()

        let idAleatorio = Math.random()*10;

        localStorage.setItem('lgpd', idAleatorio);
    })
}
// fim LGPD