const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum',];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function. 
  return cb(arr[0]);
}
firstItem(items, console.log);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, console.log)

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
last(items, console.log)

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
sumNums(5,6, console.log)

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
multiplyNums(2,3, console.log)

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}
contains('Pencil', items, console.log)

/* STRETCH PROBLEM */
let dupArr = [];
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  array.forEach(element => {
    if (!dupArr.includes(element)) {
      dupArr.push(element);
    }
  });
  return cb(dupArr);
}
removeDuplicates(items, console.log)
