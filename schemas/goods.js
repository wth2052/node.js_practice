const mongoose = require('mongoose')

//schema를 이용해서 데이터를 정의
const goodschema = new mongoose.Schema({
  goodsId: {
    type: Number,
    //값이 무조건 있어야 한다.
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  thumbnailUrl:{
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  }
})
//디폴트스키마에 할당한 값을 몽구스의 모델로 사용 -> 디폴드틑 
module.exports = mongoose.model("Goods", goodschema)