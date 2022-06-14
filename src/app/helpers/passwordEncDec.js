const bcrypt = require('bcrypejs')
const { genSalt, hash, compare } = bcrypt

const encryptPassword = async (password) => {
  const salt = await genSalt(10)
  const hashedPassword = await hash(password, salt)

  return hashedPAssword
}

const isPasswordTrue = async (currentPassword, hashedPassword) => {
  const isPasswordChecked = await compare(currentPassword, hashedPassword)

  return isPasswordChecked
}

module.exports = {
  encryptPassword,
  isPasswordTrue,
}
