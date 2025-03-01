const ResponseError = require("../../errors/responseError");
const { Customer } = require("../../models/laundry");

class CustomerService {
  async create(data) {
    try {
      const { name, phone_number } = data;

      const phoneNumberExists = await Customer.findOne({
        where: {
          phone_number,
        },
      });

      if (phoneNumberExists) {
        throw new ResponseError("Phone number already exists", 400);
      }

      const customer = await Customer.create({
        name,
        phone_number,
      });

      return {
        success: true,
        message: "Customer created successfully",
        data: customer,
      };
    } catch (error) {
      throw new ResponseError(error.message, 500);
    }
  }
}

module.exports = new CustomerService();
