// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => {return};

// let anotherFunction = function (param) {
//   return param;
// };

let anotherFunction = (param) => {return param};

console.log(anotherFunction('my String'));
console.log(anotherFunction(5));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (param1, param2) => {return param1 + param2};

console.log(add(4,5));

let subtract = function (param1, param2) {
  return param1 - param2;
};
console.log(subtract(1,2)); //?

let subract = (param1, param2) => {return param1 - param2};
console.log(subtract(2,1));

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

for (let x of exampleArray) {
  console.log(x);
}

let triple = exampleArray.map((num) => {return num * 3});
console.log(triple);