

const { getUUID } = require('./get-id.plugin');
const { getAge } = require('./get-age.plugin');
const { http } = require('../plugins/http-client.plugin');
const buildLogger = require('../plugins/logger.plugin');



module.exports = {

    getAge,
    getUUID,
    http,
    buildLogger,
}