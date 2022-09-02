"user strict";

//Array

// 1.Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["apple", "banana", "watermelon", "strawberry"];
console.log(fruits);
console.log(fruits[0]); // 배열 첫번째값
console.log(fruits[fruits.length - 1]); //마지막 값

// 3. Looping over an array
//for of
for (value of fruits) {
  console.log(value);
}
console.log("=============================");
// forEach
fruits.forEach((fruit, index, array) => {
  console.log(fruit, index, array);
});

// 4.Addition, deletion, copy

// push: add an item to the end  , unshift() add an item to the front
fruits.push("peach", "blueberry");
console.log(fruits);

// pop: remove an item from the end , shift(): remove an item from the front
console.log(fruits.pop()); //
console.log(fruits);

// note!! shift, unshift are slower than pop, push ***** 따라서 shift, unshift 사용은 지양할것

console.log("=================splice==============");
// splice : remove an item by index position
fruits.splice(2, 2, "apple"); //갯수를 지정하지않으면 지정한 인덱스부터 전부 지움
//2번 인덱스부터 2개를 지운후 해당 인덱스위치에 apple 을 추가함

console.log(fruits);

// concat: combine two arrays
const fruits2 = ["redapple", "greenapple"];
const addFruits = fruits.concat(fruits2);
console.log(addFruits);

// 5. Searching
// indexOf: find the index , includes ,lastIndexOf

console.log(fruits);
console.log(fruits.indexOf("apple")); // 동일한 값 중 가장 앞에있는 인덱스 출력
console.log(fruits.indexOf("bbbbbb")); // 배열안에 없는 값을 검사하면 결과값이 -1 로 출력됨

console.log(fruits.includes("apple")); // 값 유무 검사

fruits.push("apple");
console.log(fruits);
console.log(fruits.lastIndexOf("apple")); // lastIndexOf 는 뒤에서부터 검사.

console.log("=================정렬==============");
console.log(fruits.toLocaleString());
console.log([11, 2, 22, 1].sort((a, b) => a - b));
