const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const port = 3000;
//router 가져오기
const goodsRouter = require('./routes/goods.js')
const cartsRouter = require('./routes/cart.js')
const connect = require('./schemas')
connect()

//전역 미들웨어
app.use(express.json())//body 데이터를 사용하기 위해
//api경로가 추가 된 경우 goodsRouter로 가라, 여러 라우터를 사용 할때 배열로 사용
app.use("/api", [goodsRouter,cartsRouter])

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});