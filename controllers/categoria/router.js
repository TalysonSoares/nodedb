const controller = require('./categoriaController');
const router = require('express').Router();

router.get('/categorias', (req, res) => {
    res.send(
        controller.listar()
    )
})

module.exports = router