const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./custom-err')

class UnAuthenticatedError extends CustomAPIError {
  constructor(messgae) {
    super(message)
    this.success, (this.statusCode = StatusCodes.UNAUTHORIZED)
  }
}

module.exports = UnAuthenticatedError
