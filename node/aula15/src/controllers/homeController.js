module.exports.form = function formHome(req, res) {
    console.log(req.flash('error'))
    res.render('index');
}

module.exports.trataPost = function trataPost(req, res) {
    res.send(`Recebi seu formulario ${req.body.cliente}`);
}