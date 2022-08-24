"use strict";

// Variable
// let (added in ES6)
{
  //Block Scope
}
// Global Scope
let name = "youngseok";
console.log(name);
name = "hello";
console.log(name);

// var (don't ever use this!)
// hoisting , no block scope
{
  age = 4;
  var age;
}
console.log(age);

// Const
// 선언과 동시에 할당하며 값이 변경 불가능 (immutable)
// Security / Thread safety / Reduce human mistakes

// Variable types
// 1. Primitive, single item : number, string, boolean, null, undefined, symbol
// 값 자체가 메모리에 저장됨 
// 2. Object
// 값의 메모리 주소가 저장됨 

// symbol - create unique indentifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
// symbol1 === symbol2 -> false
const symbol3 = Symbol.for("id");
const symbol4 = Symbol.for("id");
// symbol3 === symbol4 -> true
// symbol 값을 출력하려면 symbol.description 으로 출력해야함 ex) `${symbol.description}


// Dynamic typing: dynamically typed language 선언할때 타입을 지정하지않고 프로그램이 동작할때 할당된 값에 따라 타입이 변경됨
 