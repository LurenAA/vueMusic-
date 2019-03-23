var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan')

var homePageRouter = require('./routes/homePage');

var app = express();

app.use(express.static(__dirname + '/dist'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'))

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "appliation/json;charset=utf-8");
  next();
});

app.use('/home', homePageRouter)

module.exports = app;
