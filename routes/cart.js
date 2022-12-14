const express = require("express")
const router = express.Router()

const Cart = require('../schemas/cart.js')
const Goods = require('../schemas/goods.js')

// localhost:3000/api/carts Get Method
router.get('/carts', async (req, res) => {
  const carts = await Cart.find({})
  // [{goodsId, quantitiy}] -> goodsId에 해당하는 상품을 가져와야함
  //map 함수 
  //결과값에 대해서만 map 에 할당이 됨.
  const goodsIds = carts.map((cart) => {
    return cart.goodsId
  })
  //Goods에 해당하는 모든 정보를 가지고 오는데, goodsIds가 존재 하는 값일 때만 goods변수에 할당하라
  const goods = await Goods.find({ goodsId: goodsIds })

  const results = carts.map((cart) => {
    return {
      "quantity": cart.quantity,
      //goods.find의 goods는 위에서 전체 Goods에서 조건을 가지고 할당한 goods중에 
      "goods": goods.find((item) => item.goodsId === cart.goodsId)
    }
  })

  res.json({
    "carts": results,
  })
})



module.exports = router