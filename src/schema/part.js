var common = require('../common')


var specsSchema = {
  type: 'array',
  items: {
    // set up an effective "xor" between the id and name properties
    oneOf: [
      {
        type: 'object',
        properties: {
          id: common.id,
          value: common.string, // required
        },
        required: ['id', 'value'],
        additionalProperties: false,
      },
      {
        type: 'object',
        properties: {
          name: common.string,
          value: common.string, // required
        },
        required: ['name', 'value'],
        additionalProperties: false,
      },
    ],
  },
}

var properties = {
  name: common.stringNonTrivial,
  menu_id: common.string,
  menu_description: common.string,
  our_note: common.string,
  date_released: common.stringIsoDate,

  // belongsTo relations
  ptype_id: common.id,
  brand_id: common.id,

  // Complex relations
  specs: specsSchema,
  pvariations: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: common.id, // not required
        specs: specsSchema
      },
      required: ['specs'],
      additionalProperties: false,
    },
  },
}

module.exports = {
  standard: common.makeValidator(properties, true)
}
