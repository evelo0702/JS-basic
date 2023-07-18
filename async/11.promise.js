"use strict";
// Promise is a JavaScript object for asynchronous operation.
// state : pending - > fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// promise는 만든순간 바로 실행됨
const promise = new Promise((res, rej) => {
  // doing some heavy work()
  console.log("doing something...");
  setTimeout(() => {
    res("evelo");
    rej(new Error("no network"));
  }, 2000);
});

// 2. promise 사용하기 - Consumers
// then(성공시), catch(실패시), finally 사용
promise
  .then((value) => console.log(value))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((res, rej) => setTimeout(() => res(num - 1), 1000));
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((res, rej) => {
    setTimeout(() => res(`🐔`), 1000);
  });

const getEgg = (hen) =>
  new Promise((res, rej) => {
    setTimeout(() => rej(`${hen}=>🥚`), 1000);
  });
const cook = (egg) =>
  new Promise((res, rej) => {
    setTimeout(() => res(`${egg}=>🍳`), 1000);
  });
getHen()
  .then((hen) => getEgg(hen))
  .catch((err) => {
    return "🍖";
  }) //  오류처리
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch((err) => console.log(err));
