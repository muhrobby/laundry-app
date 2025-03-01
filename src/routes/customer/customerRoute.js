const express = require("express");
const validateRequest = require("../../middleware/validationMiddleware");
const {
  createCustomerSchema,
} = require("../../validations/customerValidation");
const customerController = require("../../controllers/customer/customerController");

const customer = express.Router();

customer.post(
  "/create",
  validateRequest(createCustomerSchema),
  customerController.create
);

module.exports = customer;
