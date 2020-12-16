const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const config = require('./Configuracion')
const {notFound, errorHandler} = require('./Middleware');

const corsConfig = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsConfig));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(function (req, res, next) {
    console.log('Request Type:', req.method);
    console.log('Request URL:', req.originalUrl);
    next();
});

router.get('/fecha', async function (req, res, next) {
    try {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.send({success: true, date: new Date().getTime()});
    } catch (err) {
        next(err);
    }
});

app.use(router);

app.use(notFound);
app.use(errorHandler);

const server = app.listen(config.port, function () {
    console.log(`El Servidor inicio en el puerto ${server.address().port}`);
});
module.exports = app;
