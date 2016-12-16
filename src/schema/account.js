var common = require('../common')


var properties = {
  email: common.stringEmail,
  display: common.stringNonTrivial,
  password: common.stringPassword,
  // password_confirmation must be equal to password
  password_confirmation: { constant: { '$data': '1/password' } },
  password_login: common.string,
}

module.exports = {
  register: common.makeValidator(properties, ['email', 'display', 'password', 'password_confirmation']),
  login: common.makeValidator(properties, ['email', 'password_login']),
  updateProfile: common.makeValidator(properties, ['email', 'display']),
  updatePassword: common.makeValidator(properties, ['password', 'password_confirmation']),
}
