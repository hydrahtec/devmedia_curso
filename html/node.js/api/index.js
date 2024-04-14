const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hellow word, primeira API com expres!!');
});

app.listen(8080, () => {
    let data = new Date()

    console.log(`O servidor foi iniciado em: ${data}`)
});