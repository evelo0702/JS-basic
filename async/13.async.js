// async & await

// 1. async
async function fetchUser() {
  // do network request in 10 secs....
  return "evelo";
}

let user = fetchUser();
user.then((data) => console.log(data));
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
async function getApple() {
  await delay(1000);
  return "apple";
}
async function getBanana() {
  await delay(1000);
  return "banana";
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  console.log(`${apple}+${banana}`);
}
pickFruits();

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join("+")
  );
}
pickAllFruits().then((data) => console.log(data));
