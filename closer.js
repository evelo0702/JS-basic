// let value = 1;
// 전역 Lexical 환경 - value :1 Add: function (함수 선언문은 초기화안됨)
// function Add(num) {
//   console.log(value + num);
// }
// Add(2);
// 3
// Add 내부 Lexical 환경 - num : 2 , value는 없기때문에 상위 환경에서 참조
// 내부 렉시컬 환경은 필요시 외부,전역 렉시컬 환경에 대해 참조를 가짐

function makeClosure(a) {
  return function (b) {
    return a + b;
  };
}
// 전역 렉시컬 환경 - makeClosure:function , add1:초기화x
const add1 = makeClosure(1);
// makeClosure 내부 렉시컬 환경 - a : 1
// 이때 전역 렉시컬 환경의 add1은 function으로 초기화됨

console.log(add1(2)); // 3
// Closure 내부 렉시컬 환경 - b: 1
// 해당시점엔 makeClosuer 함수가 종료된 시점임에도 불구하고 값을 참조할수있음

const add2 = makeClosure(2);
console.log(add2(2)); // 4
console.log(add1(1)); // 2
// add1과 add2는 서로다른 환경을 가지고있음
