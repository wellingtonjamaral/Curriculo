const express = require('express');
const port = 3001;
const app = express();
const path = require('path');
const createError = require('http-errors')

//Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'));
app.use('/curriculo', require('./routes/curriculo'));
app.use('/estudos', require('./routes/estudos'));


// Resposta de Servidor Ligado
app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});

// 404
app.use((req, res, next) => {
    next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});