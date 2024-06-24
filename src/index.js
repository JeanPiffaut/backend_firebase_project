const functions = require('firebase-functions');
const { app } = require('./common/config/app.js');

/* eslint-disable no-undef */
exports.api = functions.https.onRequest(app);
