module.exports.form = function formHome(req, res) {
    res.render('index');
}

module.exports.trataPost = function trataPost(req, res) {
    res.send(`Recebi seu formulario ${req.body.cliente}`);
}