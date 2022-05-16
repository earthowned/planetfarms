const CustomError = require('./customError')

class ForbiddenRequestError extends CustomError {
  statusCode = 403

  constructor(message) {
    super(message)
    Object.setPrototypeOf(this, ForbiddenRequestError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message || 'Forbidden access' }]
  }
}
module.exports = ForbiddenRequestError
