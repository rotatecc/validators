var Joi = require('joi')
var stringNonTrivialTrimmed = require('../common').stringNonTrivialTrimmed


module.exports = {
  email: Joi.string().email().required(),
  display: stringNonTrivialTrimmed.required(),
  password: Joi.string().min(7).required(),

  // Non-columns:
  password_confirmation: Joi.any().strip().valid(Joi.ref('password')).required()
    .options({ language: { any: { allowOnly: 'Passwords must match' } } }),
  password_login: Joi.string().required(),
}
