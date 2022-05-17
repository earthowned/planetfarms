const { ValidationError } = require('express-validation')
const { MulterError } = require('multer')
const CustomError = require('../errors/customError')

const errorHandler = (err, _req, res, _next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() })
  }

  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  if (err instanceof MulterError && err.message === 'Unexpected field') {
    return res.status(400).json({
      errors: [{
        message: 'Invalid key used to upload file'
      }]
    })
  }

  console.log(err.message)

  res.status(500).send({
    errors: [{ message: 'Something went wrong' }]
  })
}

module.exports = errorHandler
