const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const appRoutes = require('./src/routes');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', appRoutes);

app.listen(3000);
