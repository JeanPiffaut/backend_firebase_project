const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {});

module.exports = app;
