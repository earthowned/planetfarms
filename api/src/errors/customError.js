class CustomError extends Error {
  constructor (message) {
    super(message)
    Object.setPrototypeOf(this, CustomError.prototype)
  }
}
module.exports = CustomError
