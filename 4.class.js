"use strice";
//Object = 객체
//class : 붕어빵틀  template
//object : 붕어빵재료 instance of a class

//1. Class declarations - 클래스 선언
class Person {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}:hello!`);
  }
}
//james 는 person 클래스를 활용한 object
const james = new Person("james", 31);
console.log(james.name);
console.log(james.age);
james.speak();
console.log(james);

//2. Getter and setters

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value === "noh" ? "hello" : "bye";
  }
}

const user1 = new User("noh", "job", -1);
console.log(user1.age);
console.log(user1.firstName);

//3. Inheritance = 상속
//extends 를 이용해서 연결함.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}
//shape 클래스를 상속.
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    console.log("▲"); //이렇게 필요한 부분만 고치는것을 오버라이딩이라함
    //오버라이딩 하면 기존의 함수가 대체되기때문에 기존의 함수를 추가하는 방법은 super.함수명() 이다.
    super.draw();
    // 공통적으로 정의한 shape의 draw 도 출력하고 싶을시 super을 사용
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

//4. Class checking: A instanceof B -> A오브젝트가 B클래스를 상속해 만들어진 경우인지 검사하는 기능

console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof Shape); //t
console.log(triangle instanceof Object); //t javascript의 모든 object는 object를 상속함.
