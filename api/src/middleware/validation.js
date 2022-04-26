const { validate } = require('express-validation')

const validation = (schema) => validate(schema, { keyByField: true }, { abortEarly: false })

module.exports = validation