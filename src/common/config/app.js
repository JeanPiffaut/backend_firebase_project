const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../../user/infrastructure/userRoutes.js');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/users', userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
