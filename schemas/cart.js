const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
  goodsId : {
    type: Number,
    required: true,
    unique: true
  },
  //수량
  quantity: { 
    type: Number,
    required : true
  }
})

module.exports = mongoose.model('Cart', cartSchema)