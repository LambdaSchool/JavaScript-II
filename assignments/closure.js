// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let myClosure = ((current_input) => {
  let last_input = ["none"];
  return (current_input) => {
    last_input.unshift(current_input);
    return last_input[1];
  }
})();

// ---- myClosure returns the argument it was given the previous time it was called.  

console.log(myClosure("blah"));
console.log(myClosure("blargh"));
console.log(myClosure("argh"));
console.log(myClosure("aaaaah"));


// ==== Challenge 2: Create a counter function ====
let counter = (() => {
  let count = 0;
  return () => {return count += 1};
})();

  // Return a function that when invoked increments and returns a counter variable.

counter();
counter();
counter();
counter();
console.log(counter());




// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (() => {
  let count = 0;
  return {
    increment: () => {
      return count++;
    },
    decrement: () => {
      return count--;
    },
  }
})();

counterFactory.increment();
counterFactory.increment();
counterFactory.decrement();
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.increment());
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
