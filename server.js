/**
 * Module dependencies.
 */
var express       = require('express');
var http          = require('http');
var https         = require('https');
var path          = require('path');
var url           = require('url');
var Bootloader    = require('./bootloader');

var app = express();

/**
 * main application configuration.
 */
app.configure(function(){
    app.set('port', process.env.PORT || 3000);

    // Web server
    app.use(express.favicon(__dirname + '/public/images/favicon.png'));
    app.use(express.static(path.join(__dirname, 'public')));




    require('express-helpers')(app);

    app.use(function (req, res, next) {
        res.locals.req = req;
        next();
    });

    app.use(function(req, res, next){
        res.locals.path = url.parse(req.url).pathname;
        next();
    });

    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.bodyParser({uploadDir:'./tmpUpload'}));
    app.use(express.methodOverride());
    app.use(express.session({ secret: 'CtrBew' }));
    app.use(express.errorHandler());

    // GNU Terry Pratchett
    app.use(function(req, res, next){
        res.set('X-Clacks-Overhead', 'GNU Terry Pratchett');
        next();
    });


    app.use(app.router);
});

/**
 * boot application with all modules.
 */
var bootloader = new Bootloader(app);


/**
 * Run server.
 */
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log("\nAnd we are live on port " + app.get('port'));
});