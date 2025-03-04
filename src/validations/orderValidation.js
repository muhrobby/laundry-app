const joi = require("joi");

const createOrderSchema = joi.object({
  weight: joi.number().required(),
  subtotal: joi.number().required(),
  service_id: joi.number().required(),
  customer_id: joi.number().required(),
});

const getByOrder = joi.object({
  order: joi.string().required(),
});

const updateOrderSchema = joi
  .object({
    id: joi.number().required(),
    status: joi.string(),
    service_id: joi.number(),
    weight: joi.number(),
    subtotal: joi.number(),
  })
  .or("status", "service_id", "weight", "subtotal");
module.exports = { createOrderSchema, getByOrder, updateOrderSchema };
