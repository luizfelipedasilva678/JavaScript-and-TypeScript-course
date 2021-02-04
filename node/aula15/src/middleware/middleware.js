module.exports = (req, res, next) => {
    console.log();
    console.log('Passei no middleware global');
    console.log(req.body.cliente);
    console.log();
    next();
}