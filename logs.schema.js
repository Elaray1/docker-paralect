const joi = require('joi');

const logsSchema = joi.object({
    event: joi.string().required(),
});

module.exports = logsSchema;
