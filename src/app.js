const express = require('express');
const routes = require('./routes');
const ApiError = require('./utils/apiError');
const httpStatus = require('http-status');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/v1', routes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});


module.exports = app;