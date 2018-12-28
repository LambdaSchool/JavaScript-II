// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
//ex:
getLength(items, function(length) {
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
//ex:
last(items, function(last) {
  console.log(last);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
//ex:
sumNums(1, 2, function(items) {
  console.log(items);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
//ex:
multiplyNums(3, 4, function(items) {
  console.log(items);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (cb(list.includes(item))) {
    return true;
  } else {
    return false;
  }
}
//ex:
contains("Gum", items, function(obj) {
  console.log(obj);
});

/* STRETCH PROBLEM */

let dupes = [1, 1, 2, 3, 3, 4];
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let nonDupes = [];
  for (let i = 0; i < array.length; i++) {
    if (!nonDupes.includes(array[i])) {
      nonDupes.push(array[i]);
    }
  }
  return cb(nonDupes);
}

//ex:
removeDuplicates(dupes, function(arr) {
  console.log(arr); //logs [1,2,3,4]
});
