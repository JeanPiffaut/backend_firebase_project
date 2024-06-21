const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {app} = require('./common/config/app');

exports.users = onRequest((request, response) => {
    logger.info("Received user request", {structuredData: true});
    return app(request, response);
});
