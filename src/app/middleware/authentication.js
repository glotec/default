const User = require('../modle/User')
const jwt = require('jsonwebtoken')
const { UnAuthenticatedError } = require('../helpers/errors')

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bear ')) {
    throw new UnAuthenticatedError('Authentication invild')
  }

  const token = authHeader.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_KEY)
    //attach user to the job routes

    //const user = User.findById(payload.id).select('-password)
    req.user = { userId: payload, username: payload.username }
    next()
  } catch (error) {
    throw new UnAuthenticatedError('Authentication failed')
  }
}

module.exports = auth
