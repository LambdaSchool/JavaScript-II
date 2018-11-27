// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};

let myFunction = () =>{};
// let anotherFunction = function (param) {
//   return param;
// };
//using arrow functions
let anotherFunction = (param)=>{return param};

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (param1,param2)=>{return param1+param2};

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let substract = (param1,param2)=>{return param1-param2};

// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
let exampleArray = [1,2,3,4,5,6];
console.log(exampleArray.map(num =>{return num * 3} ));