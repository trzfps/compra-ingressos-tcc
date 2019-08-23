const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/routes');
const expressSession = require('express-session');
const expressValidator = require('express-validator');
const consign = require('consign');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
module.exports = app;