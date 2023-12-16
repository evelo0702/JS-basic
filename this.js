// let person = {
//   name: "evelo",
//   age: 31,
//   printThis: function () {
//     console.log(this);
//   },
// };
// let printThis = person.printThis;

// person.printThis(); // person
// printThis(); // window

// function printThis2() {
//   console.log(this);
// }
// printThis2(); // window

// let person2 = {
//   name: "하이요",
//   printThis: printThis2,
// };
// person2.printThis();

let a = "a";
var x = "x";
function first() {
  console.log(x); // x
  var x1 = "x-1";
  let b = "b";
  console.log(a); // a
  a = "a-1";
  console.log(a); // a-1
  console.log(b); // b
}
console.log(x1); // Uncaught ReferenceError: x1 is not defined
first();
console.log(b); // Uncaught ReferenceError: b is not defined

if (true) {
  var d = "d";
  let e = "e";
}
console.log(d); // d
console.log(e); // Uncaught ReferenceError: e is not defined
