var Ajv = require('ajv')


var ajv = new Ajv({
  v5: true,
})

module.exports = ajv
