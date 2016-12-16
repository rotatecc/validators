var ajv = require('./ajv') // Ajv instance


module.exports = {

  // Mini-schemas

  id: { type: 'integer', minimum: 0 },

  string: { type: 'string' },

  stringEmail: { type: 'string', format: 'email' },

  stringIsoDate: { type: 'string', format: 'date' },

  stringNonTrivial: { type: 'string', minLength: 2 },

  stringPassword: { type: 'string', minLength: 7 },

  modStatus: { type: 'string', enum: ['non', 'approve', 'reject'] },

  // Helpers

  // Make an ajv validator using a properties object,
  // and a special 'required' value which can either be
  // an array of required properties to be used as-is,
  // or a boolean (false = require none, true = require all)
  makeValidator: function (properties, required = true) {
    var requiredFinal = (() => {
      if (required === true) {
        // Require all properties
        var propertyKeys = [], i = 0
        for (propertyKeys[i++] in properties) {}
        return propertyKeys
      } else if (required === false) {
        // Require no properties
        return []
      }

      // Assume array
      return required
    })()

    return ajv.compile({
      '$schema': 'http://json-schema.org/draft-04/schema#',
      type: 'object',
      properties: properties,
      required: requiredFinal,
      additionalProperties: false,
    })
  },
}
