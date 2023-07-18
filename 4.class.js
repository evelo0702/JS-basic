"use strice";
//Object = 객체
//class : 붕어빵틀  template
//object : 붕어빵재료 instance of a class

//1. Class declarations - 클래스 선언
class Person {
  //constructor 생성자
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
console.log("==================");

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

const user1 = new User("nohh", "job", -15);
console.log(user1.age);
console.log(user1.firstName);
console.log("====================");
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
  // 다형성
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


// 추상화 - 겹치는 정보를 상위 클래스로 따로 빼주는 작업
// 캡슐화 - 내부 데이터에 직접 접근하는것을 막을수있고 데이터와 관련 메소드를 함께 보관할수있음
class car {

  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }
  getColor() {
    return this.color;
  }

  setPrice(price) {
    if (price < 0) {
      throw Error("음수값 저장 불가");
    }
    this.price = price;
  }
}

class audi extends car {
  constructor(name, color, price, number) {
    super(name, color, price);
    this.number = number;
  }
  getAudiNumber() {
    return "아우디품번" + this.number;
  }
}

let redAudi = new audi("audi", "red", 100000, 3000);
let blueAudi = new audi("audi", "blue", 0, 3000);
console.log(redAudi);
console.log(blueAudi);
blueAudi.setPrice(5000);
console.log(blueAudi);
console.log(redAudi.getColor());
console.log(redAudi.getAudiNumber());
