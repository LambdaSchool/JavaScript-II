// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const sayHi = () => {
  return 'Hello World!'
}

console.log(sayHi())


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  const addToCounter = () => {
    return ++count;
  }
  return addToCounter;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

const anotherCounter = counter();
console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  const methods = {
    increment: function increment() {return ++count;},
    decrement: function decrement() {return --count;}
  }
  return methods;
};

const runCounter = counterFactory()
console.log(runCounter.increment());
console.log(runCounter.increment());
console.log(runCounter.decrement());








