// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const pizza = (pizza) => {
  let firstPizza = pizza;

  const sayPizza = () => {
    console.log(`${firstPizza} pizza!`)
  }

  return sayPizza;
}

const pepperoni = pizza('pepperoni')
pepperoni();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  const addOne = () => {
    console.log(++count);
  }

  return addOne;
};

// Example usage: 
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  const counterObj = {
    increment: () => {
      console.log(++count);
    },
    decrement: () => {
      console.log(--count);
    }
  }

  return counterObj;
};

const improvedCounter = counterFactory();
improvedCounter.increment();
improvedCounter.increment();
improvedCounter.increment();
improvedCounter.decrement();