const controller = require('./categoriaController');
const router = require('express').Router();

router.get('/categoria', (req, res) => {
    res.send(
        controller.listar()
    )
})

module.exports = router