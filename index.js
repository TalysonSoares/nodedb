const express = require('express');

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Pagina inicial');
}); 


app.listen(port, () => {
    console.log("API rodando no endereço http://localhost:8000");
});