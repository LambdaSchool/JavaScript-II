const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}
function first(str) {
  return str;
}
console.log(firstItem(items, first));


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
function len(num) {
  return num;
}
console.log(getLength(items, len));


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
function lastItemOnEarth(str) {
  return str;
}
console.log(last(items, lastItemOnEarth));


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}
function sumIt(num) {
  return num;
}
console.log(sumNums(3, 7, sumIt));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}
function multIt(num) {
  return num;
}
console.log(multiplyNums(3, 7, multIt));


/* STRETCH PROBLEM */
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
