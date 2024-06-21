const functions = require('firebase-functions');
const app = require('./common/config/app');

exports.api = functions.https.onRequest(app);
