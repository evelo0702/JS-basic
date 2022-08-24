// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log("1" - 2);
console.log(`string literals: 1+2 = ${1 + 2}`);

// 2. Numeric operatiors
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
const postIncrement = counter++;
console.log(`${preIncrement} // ${postIncrement} // ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. logical operators : || (or)  && (and) ! (not)

// || (or)
// or 연산자는 앞에서부터 순서대로 값을 읽고 true일 경우 그 값이 출력되고 로직을 끝냄
// 따라서 무거운 로직일수록 뒤로 배치해야함

const value1 = "hello";
const value2 = false;
function check() {
  for (let i = 0; i < 10; i++) {
    console.log("😎");
  }
  return true;
}
console.log(`or: ${value1 || value2 || check()}`);

// && (and)
// and 연산자는 값이 모두 true일때 마지막값을 출력함 + 무거운 로직일수록 뒤로 배치해야함
// false일때는 가장 앞에있는 false값을 출력하고 로직을 끝냄
const value3 = 0;
const value4 = false;
function check2() {
  for (let i = 0; i < 10; i++) {
    console.log("😍");
  }
  return "hhhhhoooo";
}
console.log(`or:${value3 && check2() && value4}`);
console.log("----------------------------------");
// 7. Equality
const stringFive = "5";
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
// object equality by reference
const ys1 = { name: "youngseok" };
const ys2 = { name: "youngseok" };
const ys3 = ys1;
console.log(ys1 == ys2); // false
console.log(ys1 === ys2); // false
console.log(ys1 === ys3); // true

// 8. Conditional operators: if
// if, else if, else
const name0 = "youngseok";
if (name0 === "youngseok") {
  console.log(`Welcome ${name0}`);
} else if (name === "coder") {
  console.log("hi coder");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name0 === "youngseok" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("IE");
    break;
  case "Chrome":
    console.log("Chrome");
    break;
  default:
    console.log("same all");
    break;
}

// 11. Loops
// while loop, while the condition is truthy
let i = 3;
while (i > 0) {
  console.log(i);
  i--;
}

// do while loop, body code is executed first, then check the condition.
let j = 3;
do {
  console.log(`do while:${j}`);
  j--;
} while (j > 3);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for:${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i:${i},j:${j}`);
  }
}

// break, continue
// break - 해당 반복문을 끝냄 continue 해당값만 스킵하고 넘어감
for (let i = 0; i < 11; i++) {
  if (i > 0 && i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}

for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  } else {
    console.log(i);
  }
}
