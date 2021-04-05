const { Schema } = require('mongoose');

const ItemSchema = new Schema(
    {
        itemname: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        condition: {
            type: String
        },
        priceBought: {
            type: String
        }
    },
    {
      toJSON: {
        getters: true
      }
    }
);

module.exports = ItemSchema;