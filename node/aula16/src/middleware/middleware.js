module.exports = (req, res, next) => {
    res.locals.VariavelLocal = 'Este é o valor da variável loca.';
    next();
}