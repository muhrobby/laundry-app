const serviceService = require("../../services/service/serviceService");

class ServiceController {
  async getAll(req, res, next) {
    try {
      const result = await serviceService.getAll();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      const result = await serviceService.getById(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      const result = await serviceService.create(req.body);

      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const result = await serviceService.update(req.body);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async destroy(req, res, next) {
    try {
      const result = await serviceService.destroy(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ServiceController();
