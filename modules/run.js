//객체구조분해할당 { }
const { add } = require("./math.js")

console.log(add(10, 30));

//module.exports를 했을때 = add 함수 자체를 내보내줌
//exports.add하게 됐을때는 객체로 밖에 내보내줌

