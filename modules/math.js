
// 모듈을 호출했을 때 add 키 값에는 (a, b){return a + b;} 익명함수가 할당되는 방법
// 4가지가 있음 편한거 골라쓰면됨
exports.add = function (a, b) {

    return a + b;
}
// 모듈을 호출했을 때, add 키 값에는 add 변수 함수가 가지고 있는 값이 할당됨.
// const add = (a, b) => {
//     return a + b;
// }

// 모듈을 호출했을때 add 키 값에는 add 함수가 들어가는 방법
// module.exports = add;
//모듈 그 자체를 바로 add 함수를 할당
//module.exports = {add : add};
