var common = require('../common')


var properties = {
  name: common.stringNonTrivial,
}

module.exports = {
  standard: common.makeValidator(properties, true)
}
