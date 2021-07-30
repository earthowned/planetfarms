const CustomError = require('./customError')

class NotFoundError extends CustomError {
  statusCode = 404

  constructor() {
    super('Route not found')
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [{ message: 'Data Not Found' }]
  }
}
module.exports = NotFoundError
