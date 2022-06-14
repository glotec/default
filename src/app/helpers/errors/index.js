const CustomAPIError = require('./custom-err')
const UnAuthenticatedError = require('./unAuthenticated')
const NotFoundError = require('./notFound')
const BadRequest = require('./bad-request')

module.exports = {
  CustomAPIError,
  UnAuthenticatedError,
  NotFoundError,
  BadRequest,
}
