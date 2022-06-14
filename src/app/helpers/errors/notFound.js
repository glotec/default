const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./custom-err')

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.success = false
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

module.exports = NotFoundError
