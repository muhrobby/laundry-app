module.exports = class ResponseError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
};
