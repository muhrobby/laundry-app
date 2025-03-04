const express = require("express");
const validateRequest = require("../../middleware/validationMiddleware");
const orderController = require("../../controllers/order/orderController");
const {
  createOrderSchema,
  getByOrder,
  updateOrderSchema,
} = require("../../validations/orderValidation");

const order = express.Router();

order.post(
  "/create",
  validateRequest(createOrderSchema),
  orderController.create
);
order.get("/", orderController.getAll);
order.get(
  "/:order",
  validateRequest(getByOrder, "params"),
  orderController.getByOrder
);

order.patch(
  "/update",
  validateRequest(updateOrderSchema),
  orderController.update
);

module.exports = order;
