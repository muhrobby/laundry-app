const joi = require("joi");

const createServiceSchema = joi.object({
  name: joi.string().min(3).max(50).required(),
  price_per_kilo: joi.number().positive().required(),
});

const updateServiceSchema = joi
  .object({
    id: joi.number().positive().required(),
    name: joi.string().min(3).max(50),
    price_per_kilo: joi.number().positive(),
  })
  .or("name", "price_per_kilo");

const getByIdServiceSchema = joi.object({
  id: joi.number().positive().required(),
});

const destroyServiceSchema = joi.object({
  id: joi.number().positive().required(),
});

module.exports = {
  createServiceSchema,
  updateServiceSchema,
  getByIdServiceSchema,
  destroyServiceSchema,
};
