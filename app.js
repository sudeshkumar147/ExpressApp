const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const uuid = require('uuid/v4')
const session = require('express-session');
const flash = require('req-flash');
const FileStore = require('session-file-store')(session);
const dotenv = require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('dsdjkdhkhhjk'));

app.use(session({
  genid: (req) => {
    console.log(req.sessionID);
    return uuid()
  },
  store: new FileStore(),
  secret: 'dskdjkdd',
  saveUninitialized:true,
  resave:false,
  cookie: {
    maxAge: 60000
  }
}));
app.use(flash());

app.use(function(req, res, next){
  res.locals.success_messages = req.flash('successMessage');
  res.locals.error_messages = req.flash('errorMessage');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Database configuration
const dbUrl = require('./config/db');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbUrl.url,{
  useNewUrlParser: true
}).then(() => {
  console.log("Database Connected Successfully")
}).catch((error) => {
  console.log(error);
  process.exit();
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
