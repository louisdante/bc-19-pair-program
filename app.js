var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    exphbs = require('express-handlebars'),
    expressValidator = require('express-validator'),
    flash = require('connect-flash'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    mongo = require('mongodb'),
    mongoose = require('mongoose'),
    firebase = require("firebase");
mongoose.connect('mongodb://localhost/codepair');
var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');