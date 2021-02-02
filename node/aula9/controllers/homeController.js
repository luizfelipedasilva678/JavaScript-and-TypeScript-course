module.exports.form = function formHome(req, res) {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="qualquercoisa"><br>
        <button>Olá mundo</button>
        </form>
    `);
}

module.exports.trataPost = function trataPost(req, res) {
    res.send(`Recebi seu formulario ${req.body.qualquercoisa}`);
}