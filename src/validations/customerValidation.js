const joi = require("joi");

const createCustomerSchema = joi.object({
  name: joi.string().min(3).required(),
  phone_number: joi.string().min(5).required(),
});

module.exports = { createCustomerSchema };
