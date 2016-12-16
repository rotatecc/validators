var Joi = require('joi')


module.exports = {

  id: Joi.number().positive().integer(),

  stringNonTrivialTrimmed: Joi.string().trim().min(2),

  stringAllowEmptyTrimmed: Joi.string().trim().allow(''),

  modStatus: Joi.string().valid('non', 'approve', 'reject'),

}
