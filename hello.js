// const sayHello = function() {
//   console.log("Hello, world");
// }

// sayHello();

// const sayHello = function(name) {
//   console.log("Hello, " + name);
// }

// sayHello("Sasha");
// sayHello("Ash");
// sayHello("Jeremy");

const returnSayHello = function(name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);