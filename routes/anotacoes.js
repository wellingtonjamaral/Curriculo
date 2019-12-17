const express = require('express')
const router = express.Router();

const anotacoesController = require('../controllers/anotacoes-controller');

router.get('/', (req, res, next) => {
    const anotacoesData = anotacoesController.getData();
    res.render('anotacoes', anotacoesData);
});

module.exports = router;