const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//our own middleware
app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
// our own custom middleware

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
