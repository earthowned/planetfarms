const CustomError = require('../errors/customeError')

const errorHandler = (err, _req, res, _next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() })
  }

  console.error(err)
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }]
  })
}

module.exports = errorHandler
