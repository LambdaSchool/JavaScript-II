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


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(items.length)
}

getLength(items, (arrLength) => {
  console.log(arrLength)
})



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(items[items.length - 1])
}

last(items, (lastItem) => {
  console.log(lastItem)
})



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}

sumNums(400, 20, (summed) => {
 console.log(summed)
})



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y)
}

multiplyNums(10, 10, (multiply) => {
  console.log(multiply)
})


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item))
}
  contains('Pencil', items, (contain) => {
    console.log(contain)
  })



/* STRETCH PROBLEM */

const duplicateditems = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil', 'Notebook', 'yo-yo', 'Gum'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let uniqueArray = []

  for(let i = 0; i < array.length; i++) {
    if(uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i])
    }
  }
  return cb(uniqueArray)

}

removeDuplicates(duplicateditems, (duplicate) => {
  console.log(duplicate)
})