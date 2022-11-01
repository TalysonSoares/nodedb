const controller = require('./categoriaController');
const router = require('express').Router();

router.get('/categorias', async (req, res) => {
    res.send(
        await controller.listar()
    )
})

module.exports = router;