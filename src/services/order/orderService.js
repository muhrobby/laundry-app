const ResponseError = require("../../errors/responseError");
const { Service, Customer, Order } = require("../../models/laundry");
const randomstring = require("randomstring");

class OrderService {
  async getAll() {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: Customer,
          },
          {
            model: Service,
          },
        ],
      });

      return {
        success: true,
        message: "Order fetched successfully",
        data: orders,
      };
    } catch (error) {
      throw new ResponseError(error.message, 500);
    }
  }

  async getByOrder(no_order) {
    try {
      console.log(no_order);

      const order = await Order.findOne({
        where: {
          no_order,
        },
        include: [
          {
            model: Customer,
          },
          {
            model: Service,
          },
        ],
      });

      if (!order) {
        throw new ResponseError("Order not found", 404);
      }

      return {
        success: true,
        message: "Order fetched successfully",
        data: order,
      };
    } catch (error) {
      throw new ResponseError(error.message, 500);
    }
  }
  async create(data) {
    try {
      const { weight, subtotal, service_id, customer_id } = data;
      const no_order =
        "INV" +
        new Date().getFullYear() +
        String(new Date().getMonth() + 1).padStart(2, "0") +
        String(new Date().getDate()).padStart(2, "0") +
        randomstring.generate({
          length: 7,
          capitalization: "uppercase",
        });

      console.log(no_order);

      const service = await Service.findByPk(service_id);

      if (!service) {
        throw new ResponseError("Service not found", 404);
      }

      const customer = await Customer.findByPk(customer_id);

      if (!customer) {
        throw new ResponseError("Customer not found", 404);
      }

      const subtotalBackEnd = weight * service.price_per_kilo;

      if (subtotal !== subtotalBackEnd) {
        throw new ResponseError("Subtotal not match", 400);
      }

      const order = await Order.create({
        no_order,
        weight,
        subtotal,
        service_id,
        customer_id,
        status: "pending",
      });

      return {
        success: true,
        message: "Order created successfully",
        data: order,
      };
    } catch (error) {
      throw new ResponseError(error.message, 500);
    }
  }
}

module.exports = new OrderService();
