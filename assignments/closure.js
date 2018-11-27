// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function simpleEx(exampleString) {
  const holdingStringForClosure = exampleString;

  function closureOverExample() {
    console.log(`I have access to ${holdingStringForClosure}`);
  }

  closureOverExample();
};

simpleEx("hello");

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let value = 0;

  return function() {
    console.log(value++);
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
newCounter();
newCounter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {

  let value = 0;

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  return {
    increment: function(){
      console.log(value++);
    },
    decrement: function(){
      console.log(value--);
    }
  }
};

console.log("\n From counter2: \n");
const newCounter2 = counterFactory();
for(let i = 0; i < 20; i++) {
  if(i%3 ===0) {
    newCounter2.decrement();
  } else {
    newCounter2.increment();
  }
}
