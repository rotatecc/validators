var common = require('../common')


var properties = {
  modstatus: common.modStatus,
}

module.exports = {
  moderate: common.makeValidator(properties, ['modstatus'])
}
