const orderService = require("../../services/order/orderService");

class OrderController {
  async getAll(req, res, next) {
    try {
      const result = await orderService.getAll();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getByOrder(req, res, next) {
    try {
      const result = await orderService.getByOrder(req.params.order);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      const result = await orderService.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const result = await orderService.update(req.body);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OrderController();
