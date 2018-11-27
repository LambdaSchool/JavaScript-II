'use strict';
// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
    const myFunction = () => {};

// let anotherFunction = function (param) {
//   return param;
// };

const anotherFunction = (param) => param;

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const add = (param1, param2) => param1+param2;
console.log(add(1,2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const subtract = (param1, param2) => param1 - param2
console.log(subtract(1,2));

const exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const triple = exampleArray.map( (num) => num*3 );


/*IIFE closure */
for(var i =0; i<5; i++) {
    (function() {
      var savingI = i;
      
      //timer callback executes after loop
      setTimeout( function() {
        console.log(`number from timer callback ${savingI}`);
      }, 1000);
    })();
  }