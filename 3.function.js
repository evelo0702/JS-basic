"use strice";
// Function

// Function declaration 함수 선언
// function name(parameter){ };
// 한가지 함수 === 한가지 기능
// 함수 이름 = 동작, 커멘드, 동사형태로 지정하는게 좋음.
// function == object

// Parameters
// premitive parameters : passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "good coder";
}
const ellie = { name: "james" };
console.log(ellie);
changeName(ellie);
console.log(ellie);

// Default parameters (added in ES6 )
function showMessage(message = "whatever", from = "anybody") {
  console.log(`${message} by ${from}`);
}
showMessage("hi");
showMessage(undefined, undefined);
//함수에서 파라미터 값을 따로 입력하지않을때를 대비해서 파라미터 값 옆에 default 값을 입력해서 대체할수있다.

// Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  /*  for,for of , forEach 세가지 모두 같은 기능을한다.  
    
    for (const arg of args){
        console.log(arg);
    } 
    
    args.forEach((arg)=> console.log(arg));
    */
}
printAll("a", "b", "c", "d");

// Return value

function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum : ${result}`);

// Early return, early exit
// 나쁜경우 - if 블럭안에서 로직을 작성하면 가독성이 떨어짐
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}
//추천경우 - 조건이 맞지 않은 경우 return 해서 함수를 빨리 종료하고 조건이 맞은 경우의 함수를 효율적으로 실행시킨다.
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic...
}

// Function expression 함수선언을 변수or상수에 선언하는것
// hoisting 불가

const print = function () {
  // 이름없는 함수= anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
//변수나 상수에 함수를 할당하면 그 변수나 상수명에 ()를 해서 함수로 사용가능

// Function declaration 함수를 따로 선언하는것
// 호이스팅이 가능함. (함수 선언한 후 선언보다 위에서 함수를 사용해도 호출이 가능함)

// Callback function using function expression
// 전달된 함수가 상황에 맞으면 함수를 호출하는것을 콜백함수라 함
function randomQuiz(a, b, c) {
  if (a === "correct") {
    b();
  } else {
    c();
  }
}
const printYes1 = function () {
  console.log("yes!");
};
//함수 생성할때 함수명을 입력하면 디버깅할때 함수명을 볼수있다.
function printNo2() {
  console.log("no!");
}
randomQuiz("correct", printYes1, printNo2);

// Arrow function
// always anonymous function
//객체(object) 안에서는 arrow function 기능을 사용하지 않음. ****

const simplePrint = function () {
  console.log("simplePrint!");
};
/* 위의 함수와 아랫 함수는 동일하다. 
const simplePrint = () = > console.log('simplePrint!'); */

/*
function sum(a,b){
    return a+b; 
} 하고 const sum = (a,b) => a+b; 은 동일한 함수이다.    
*/

//한줄일경우 { } 을 생략해도되지만 한줄을 넘어갈 경우 { } 안에 함수를 입력하고 return 을 입력해줘야함.
const simpleMultiply = (a, b) => {
  //do something more
  return a * b;
};

//IIFE : Immediately Invoked Function Expression 함수 선언과 동시에 함수를 선언함 (자주 사용x)
(function hello() {
  console.log("IIFE");
})();

//calculate function 연습
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return console.log(a + b);
    case "substract":
      return console.log(a - b);
    case "divide":
      return console.log(a / b);
    case "multiply":
      return console.log(a * b);
    case "remainder":
      return console.log(a % b);
    default:
      return console.log("잘못입력했습니다.");
  }
}

calculate("add", 1, 2);
calculate("substract", 4, 2);
calculate("divide", 4, 2);
calculate("multiply", 2, 2);
calculate("remainder", 5, 2);
calculate("ad", 1, 2);
