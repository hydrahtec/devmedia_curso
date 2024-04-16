const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let mensagem = {mensagem: 'Hellow word, primeira API com expres!!'};

    res.json(mensagem);
});

app.listen(8080, () => {
    let data = new Date()

    console.log(`O servidor foi iniciado em: ${data}`)
});