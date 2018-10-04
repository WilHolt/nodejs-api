'use strict'
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();


var methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false} ));
//conexão com o bd
mongoose.connect('mongodb://admin:admin123@ds131971.mlab.com:31971/jiujitsudb', { useNewUrlParser: true });
const Student = require('../models/students');

// carrega rotas
const indexRoute = require('../routes/index');
const studentsRoute = require('../routes/students-route');


app.use(methodOverride());
// ## CORS middleware
// see: http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};


app.use(allowCrossDomain);
app.use('/', indexRoute);
app.use('/students', studentsRoute);




module.exports = app;
