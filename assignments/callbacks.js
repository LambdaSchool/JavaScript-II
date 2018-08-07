const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
} 

function first(items) {
  console.log(items[0]);
}

firstItem(items, first);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.

  return cb(arr.length);
}

function length(items) {
  console.log(items);
}

getLength(items, length);



function last  (arr, cb) {

  // last passes the last item of the array into the callback.

return cb(arr[arr.length - 1]);
};

last(items, lastItem => {
  console.log(lastItem);
});



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.

  cb(x + y);
};

sumNums(6, 12, sum => {
  console.log(sum)
});



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.

  cb(x*y);
};

multiplyNums(6, 12, multiply =>{
  console.log(multiply)
});



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
