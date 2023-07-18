"use strict";

// 콜백 지옥 예시
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "evelo" && password === "seok9207") ||
        (id === "kokoilck" && password === "seok9207")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "evelo") {
        onSuccess({ name: "evelo", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("id를 입력해주세요");
const password = prompt("pw를 입력해주세요");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (data) => {
        alert(`Hello ${data.name}, you have a ${data.role} role!`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
