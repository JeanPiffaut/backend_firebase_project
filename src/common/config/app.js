const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const userRoutes = require('../../user/infrastructure/userRoutes'); // Asegúrate de importar las rutas de usuario

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes); // Configura las rutas de usuario

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
});

module.exports = { app, server };
