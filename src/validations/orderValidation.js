const joi = require("joi");

const createOrderSchema = joi.object({
  weight: joi.number().required(),
  subtotal: joi.number().required(),
  service_id: joi.number().required(),
  customer_id: joi.number().required(),
});

module.exports = { createOrderSchema };
