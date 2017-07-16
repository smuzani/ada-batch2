var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongo = require ('./bill.js');

app.use('/',mongo);

app.listen (8080);

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin123@ds023550.mlab.com:23550/bill_detail')

module.exports = app; 