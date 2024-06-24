const functions = require('firebase-functions');
const {app} = require('./common/config/app.js');

exports.api = functions.https.onRequest(app);