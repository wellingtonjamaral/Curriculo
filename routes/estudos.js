const express = require('express')
const router = express.Router();

const estudosController = require('../controllers/estudos-controller');

router.get('/', (req, res, next) => {
    const estudosData = estudosController.getData();
    res.render('estudos', estudosData);
});

module.exports = router;