const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./custom-err')

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.success = false
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequestError
