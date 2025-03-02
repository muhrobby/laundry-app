const express = require("express");
const validateRequest = require("../../middleware/validationMiddleware");
const orderController = require("../../controllers/order/orderController");
const { createOrderSchema } = require("../../validations/orderValidation");

const order = express.Router();

order.post(
  "/create",
  validateRequest(createOrderSchema),
  orderController.create
);
order.get("/", orderController.getAll);

module.exports = order;
