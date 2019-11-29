const express = require('express')
const router = express.Router();

const curriculoController = require('../controllers/curriculo-controller');

router.get('/', (req, res, next) => {
    const curriculoData = curriculoController.getData();
    res.render('curriculo', curriculoData);
});

module.exports = router;