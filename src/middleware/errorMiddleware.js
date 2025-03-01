const ResponseError = require("../errors/responseError");

const errorMiddleware = async (error, req, res, next) => {
  if (error instanceof ResponseError) {
    res.status(error.status).json({
      success: false,
      message: error.message,
    });
  } else {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  next();
};

module.exports = errorMiddleware;
