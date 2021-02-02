const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        { 
            extended: true
        }
    )
)

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="qualquercoisa"><br>
    <button>Olá mundo</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Recebi')
  });

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

app.get('/testes/:id_cliente?/:cliente?', (req, res) => {
    console.log(req.params);
    console.log(req.query)
    res.send('OI');
})

app.listen(3000); 