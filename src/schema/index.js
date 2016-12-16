var schemas = [
  'account',
  'brand',
  'btag',
  'build',
  'comment',
  'part',
  'photo',
  'ptype',
  'review',
  'spec',
]

module.exports = schemas.reduce(function (accum, schemaName) {
  // Not immutable, but...whatever
  accum[schemaName] = require('./' + schemaName)
  return accum
}, {})
