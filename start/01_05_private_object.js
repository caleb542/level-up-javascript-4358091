// Write your code here
const username = Symbol("username")
const password = Symbol("password")

const user = {
  [username]: "Caleb The Hammer Hamilton",
  [password]: "123456",
  age:27
}

console.log(user.username);
console.log(user.password);
