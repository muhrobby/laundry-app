const ResponseError = require("../../errors/responseError");
const { Service } = require("../../models/laundry");

class ServiceService {
  async getAll() {
    try {
      const services = await Service.findAll();
      return {
        success: true,
        message: "Service fetched successfully",
        data: services,
      };
    } catch (error) {
      throw new ResponseError(error.message, 500);
    }
  }

  async getById(id) {
    try {
      const service = await Service.findByPk(id);

      if (!service) {
        throw new ResponseError("Service not found", 404);
      }

      return {
        success: true,
        message: "Service fetched successfully",
        data: service,
      };
    } catch (error) {
      throw new ResponseError(error.message, 500);
    }
  }
  async create(data) {
    try {
      const { name, price_per_kilo } = data;

      const nameExists = await Service.findOne({
        where: {
          name,
        },
      });

      if (nameExists) {
        throw new ResponseError("Service name already exists", 400);
      }

      const service = await Service.create({
        name,
        price_per_kilo,
      });

      return {
        success: true,
        message: "Service created successfully",
        data: service,
      };
    } catch (error) {
      throw new ResponseError(error.message, 500);
    }
  }

  async update(data) {
    try {
      const { id, name, price_per_kilo } = data;

      const service = await Service.findByPk(id);

      if (!service) {
        throw new ResponseError("Service not found", 404);
      }

      if (name !== undefined) {
        service.name = name;
      }
      if (price_per_kilo !== undefined) {
        service.price_per_kilo = price_per_kilo;
      }

      await service.save();
      return {
        success: true,
        message: "Service update successfully",
        data: service,
      };
    } catch (error) {
      throw new ResponseError(error.message, 500);
    }
  }

  async destroy(id) {
    try {
      const service = await Service.findByPk(id);

      if (!service) {
        throw new ResponseError("Service not found", 404);
      }

      await service.destroy();

      return {
        success: true,
        message: "Service deleted successfully",
        data: service,
      };
    } catch (error) {
      throw new ResponseError(error.message, 500);
    }
  }
}

module.exports = new ServiceService();
