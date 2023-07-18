//JSON
//JavaScript Object Notation

//1. Object ->  JSON
//stringify(obj)
let json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);
//원하는 키값만 설정가능

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "james" : value;
  //key값이 name일경우 벨류에 james를 입력하고 아닐경우 원래 value를 사용;
});
console.log(json);
console.log("============================2========================");
//2. JSON -> Object
//parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump();    //json으로 변환시 함수가 포함되지 않기때문에 json에서 obj로 변환시도 함수는 포함되지 않는다.

console.log(rabbit.birthDate.getDate());
