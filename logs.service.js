const logsSchema = require('./logs.schema');

const connectionString = 'mongodb://db/docker';
const db = require('@paralect/node-mongo').connect(connectionString);

const logsService = db.createService('logs', logsSchema);

module.exports = logsService;
