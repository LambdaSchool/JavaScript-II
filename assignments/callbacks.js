// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

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
function hey(x) {
  console.log("The answer is " + x)
};

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  console.log(cb(arr));
};

let arrayLength = function(items) {
  return items.length;
};

getLength(items, arrayLength);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1])
}

last(items, function(lastItem) {
  console.log(`I believe you're referring to ${lastItem}`);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y)
}

sumNums(5, 10, function(result) {
  console.log(result);
})



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y)
}

multiplyNums(4, 5, function(dog){
  console.log(dog);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  hits = 0;
  for(i = 0; i < list.length; i++) {
    if (list[i] === item) {
      hits += 1;
    }
  } if (hits > 0) {
    cb(true)
  } else {
    cb(false)
  }
}

contains('Notebook', items, function(result){
  console.log(result);
})

/* STRETCH PROBLEM */

const dogs = ['Pit Bull', 'Cocker Spaniel', 'Beagle', 'Doberman', 'Beagle', 'Chihuahua', 'Scottish Terrier', 'Saint Bernard', 'Cocker Spaniel'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  cb([...new Set(array)]);
};

removeDuplicates(dogs, function(unique) {
  console.log(unique);
});