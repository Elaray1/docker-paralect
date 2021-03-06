const userSchema = require('./user.schema');

const connectionString = 'mongodb://mongo-ev/docker';
const db = require('@paralect/node-mongo').connect(connectionString);

const userService = db.createService('users', userSchema);

module.exports = userService;
