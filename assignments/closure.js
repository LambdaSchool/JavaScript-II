// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function animalSpeak(animalSound) {
  const sound = animalSound;
//  debugger;

  if(sound === "meow") {
  //  debugger;
    function catSpeak() {
      const catSentence = `${sound} ${sound} ${sound}`;
      console.log(catSentence);
  //    debugger;
      
    }
    catSpeak();
   // debugger;
  } 
  if(sound === "woof") {
   // debugger;
    function dogSpeak() {
      const dogSentence = `${sound} ${sound} ${sound} ${sound}`;
      console.log(dogSentence);
     // debugger;
    }
     dogSpeak()   
  } 
}
animalSpeak("woof");
animalSpeak("meow")


// ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
//   let count = 0;
//   return function() {
//     return count += 1;
//   }
// };

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => count += 1;
  };
// Example usage: 
const newCounter = counter();
console.log(newCounter());
newCounter(); // 1
console.log(newCounter());
newCounter(); // 2
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
