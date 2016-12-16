var common = require('../common')

/**
 * Standard POST/PUT body for Build:
 *
 * {
 *   name,
 *   description,
 *   btags: [1, 2, 3],
 *   bvariations: [
 *     // NOTE The BVariation 'order' field should be set to its index in this list
 *     {
 *       ?id, // If new, no id entry.
 *       name,
 *       bvariationtype_id,
 *       pvariations: [1, 2, 3]
 *     }
 *   ]
 * }
 */

var properties = {
  name: common.stringNonTrivial,
  description: common.string,
  btags: {
    type: 'array',
    items: common.id,
  },
  bvariations: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: common.id, // not required
        name: common.stringNonTrivial,
        bvariationtype_id: common.id,
        pvariations: {
          type: 'array',
          items: common.id,
        }
      },
      required: ['name', 'bvariationtype_id', 'pvariations'],
      additionalProperties: false,
    },
  },
}

module.exports = {
  standard: common.makeValidator(properties, true)
}
