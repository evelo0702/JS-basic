//Object
//object = { key : value };
//1. object 생성방법 2가지
const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor (기존에 생성된 오브젝트를 상속받음)

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const james = { name: "youngseok", age: 4 };
print(james);

//object의 요소를 추가 또는 삭제가 가능함 (권장하진않음)

james.hasJob = false;
console.log(james.hasJob);

delete james.hasJob;
console.log(james);

//2. Computed properties -> 계산된 속성
//key값은 항상 string 타입
console.log(james.name);
console.log(james["name"]);
//둘은 동일한 결과.  .은 코딩할때 주로 사용되고 []은 실시간으로 key 값을 입력받을때 사용됨

function printValue(obj, key) {
  console.log(obj[key]); //wrong answer => console.log(obj.key);
}
//입력받은 key값은 string 이여야 하기때문에 obj.key 를 쓸경우 obj.'key'가 적용되기때문에 이경우 obj.key가 아닌 obj[key]를 사용해야한다.
printValue(james, "name");

// 3. Property value shorthand  + Constuctor function
const person1 = { name: "bob", age: 2 };
const person2 = { name: "job", age: 3 };
const person3 = new Person("james", 31);
console.log(person3);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 4. in operator : property existence check ( key in obj )
//object 안에 해당 key가 존재하는지 확인하는 기능
console.log("name" in james);
console.log("age" in james);

// 5. for..in vs for..of
//for ( key in obj ) 모든 key들을 불러와서 처리함. object일때 사용
console.log("==========================");
for (key in james) {
  console.log(key);
}
// for ( value of iterable(반복할수있는))  배열일때 사용
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}
/* 위와 동일 
for(let i=0; i<array.length; i++){
    console.log(array[i]);
} */

// 6. Cloning
const user = { name: "james", age: 29 };
const user2 = user;
user2.name = "coder";
console.log("hello");
console.log(user);
console.log("======================");
// 두 속성은 연결돼있기때문에 user2의 속성을 변경하면 user의 속성도 변경된다. 이렇게 연결이 아닌 복제를 할경우 Object.assign 기능을 사용하면된다.
// assign<T, U>(target: T, source: U): T & U;
const user4 = Object.assign({}, user);
console.log(user4);
// const user4={};
// Object.assign(user4,user); 위와 동일함.

// 여러개 적용
// assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
const fruit1 = { color: "red", color2: "yellow" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); //겹치는 키값이 있으면 뒤에있는 값을 덮어씌운다.
console.log(mixed);
