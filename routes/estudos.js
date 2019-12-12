const express = require('express')
const router = express.Router();

const estudosController = require('../controllers/estudos-controller');
const anotacoesController = require('../controllers/anotacoes-controller');

router.get('/', (req, res, next) => {
    const estudosData = estudosController.getData();
    res.render('estudos', estudosData);
});

router.get('/anotacoes', (req, res, next) => {
    const anotacoesData = anotacoesController.getData();
    res.render('anotacoes', anotacoesData);
});

module.exports = router;