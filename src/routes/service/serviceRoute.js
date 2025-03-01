const exprees = require("express");
const serviceController = require("../../controllers/service/serviceController");
const validateRequest = require("../../middleware/validationMiddleware");
const {
  createServiceSchema,
  updateServiceSchema,
  getByIdServiceSchema,
  destroyServiceSchema,
} = require("../../validations/serviceValidation");

const service = exprees.Router();

service.get("/", serviceController.getAll);

service.get(
  "/:id",
  validateRequest(getByIdServiceSchema, "params"),
  serviceController.getById
);

service.post(
  "/create",
  validateRequest(createServiceSchema),
  serviceController.create
);

service.patch(
  "/update",
  validateRequest(updateServiceSchema),
  serviceController.update
);

service.delete(
  "/delete/:id",
  validateRequest(destroyServiceSchema, "params"),
  serviceController.destroy
);

module.exports = service;
