const customerService = require("../../services/customer/customerService");

class CustomerController {
  async create(req, res, next) {
    try {
      const result = await customerService.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CustomerController();
