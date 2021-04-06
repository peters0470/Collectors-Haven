const { Schema, model } = require('mongoose');
const ItemSchema = require('./Item')

const CollectionSchema = new Schema(
    {
       name: {
           type: String,
           required: true,
           trim: true
       },
       user: {
           type: Schema.Types.ObjectId,
           ref: "User"

       } ,
       items:[ItemSchema]
       
    },
    {
      toJSON: {
        getters: true
      }
    }
);

CollectionSchema.virtual('itemCount').get(function() {
    return this.items.length;
  });
  
  const Collection = model('Collection', CollectionSchema);
  
  module.exports = Collection;