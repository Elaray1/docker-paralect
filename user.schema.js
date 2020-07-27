const joi = require('joi');

const userSchema = joi.object({
    firstName: joi.number().required(),
    lastName: joi.string().required(),
    age: joi.number().required(),
  });

module.exports = userSchema;
