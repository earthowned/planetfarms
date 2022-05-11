const { ValidationError } = require('express-validation')

const CustomError = require('../errors/customError')

const errorHandler = (err, _req, res, _next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() })
  }

  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  console.log(err)

  res.status(500).send({
    errors: [{ message: 'Something went wrong' }]
  })
}

module.exports = errorHandler
