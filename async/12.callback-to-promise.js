"use strict";

// 콜백 지옥 예시
class UserStorage {
  loginUser(id, password) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (
          (id === "evelo" && password === "seok9207") ||
          (id === "kokoilck" && password === "seok9207")
        ) {
          res(id);
        } else {
          rej(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (user === "evelo") {
          res({ name: "evelo", role: "admin" });
        } else {
          rej(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("id를 입력해주세요");
const password = prompt("pw를 입력해주세요");
userStorage
  .loginUser(id, password)
  .then((user) => userStorage.getRoles(user))
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role!`));
