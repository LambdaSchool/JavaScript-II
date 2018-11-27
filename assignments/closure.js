// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function wrapper(){
  const lastName = 'Bond';
  function greet() {
    const firstName = 'James';
    return `${firstName} ${lastName}`
  }
  return greet();
};

// console.log(wrapper());


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  debugger;
  return () => {
    return ++count;
  }
};

const newCounter = counter();
// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: function() {
      return ++count;
    },
    decrement: function() {
      return --count;
    }
  };
};

const newCounterFactory = counterFactory();

console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
<<<<<<< HEAD

=======
// console.log(newCounterFactory;
// console.log(newCounterFactory;
>>>>>>> 4b3b8d52d39eb89de404edd86e559eb0cad6eb95
