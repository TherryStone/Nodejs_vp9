var express = require('express');
// var routes = require('./routes');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var flash = require('connect-flash');



//load user routes
var user = require('./routes/users');
var app = express();
var connection = require('express-myconnection');
var mysql = require('mysql');
var logger = require('morgan');
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(flash());
app.use(validator());

//set eviroments



app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('combined'));
app.use(require('res-error'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(app.router);
app.use(
  connection(mysql, {

    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'crud_nodejs'
  }, 'request')
);
// app.get('/', routes.index);
app.get('/users', user.list);
app.get('/users/add', user.add);
app.post('/users/add', user.save);
app.get('/users/delete/:id', user.delete_user);
app.get('/users/edit/:id', user.edit);
app.post('/users/edit/:id', user.save_edit);


// app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listen on port' + app.get('port'));
});
