const ResponseError = require("../errors/responseError");

const validateRequest =
  (schema, type = "body") =>
  (req, res, next) => {
    let dataTovalidate;
    switch (type) {
      case "body":
        dataTovalidate = req.body;
        break;
      case "params":
        dataTovalidate = req.params;
        break;
      case "query":
        dataTovalidate = req.query;
        break;
      default:
        dataTovalidate = req.body;
    }

    const { error } = schema.validate(dataTovalidate);

    if (error) {
      throw new ResponseError(error.details[0].message, 400);
    }

    next();
  };

module.exports = validateRequest;
