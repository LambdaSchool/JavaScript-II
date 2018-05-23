const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const cb = str => console.log(str);

// function firstItem(arr, cb) {
//   // firstItem passes the first item of the given array to the callback function.
//   cb(arr[0]);
// }
const firstItem = (arr, cb) => cb(arr[0]);

// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
//   cb(arr.length);
// }
const getLength = (arr, cb) => cb(arr.length);

// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   cb(arr.length - 1);
// }
const last = (arr, cb) => cb(arr.length - 1);

// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
//   cb(x + y);
// }
const sumNums = (x, y, cb) => cb(x + y);

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
//   cb(x * y);
// }
const multiplyNums = (x, y, cb) => cb(x * y);

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   cb(list.includes(item));
// }
const contains = (item, list, cb) => cb(list.includes(item));

/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//   let newArr = [];
//   array.forEach(elem => {
//     if (!newArr.includes(elem)) {
//       newArr.push(elem);
//     }
//   });
//   cb(newArr);
// }

const removeDuplicates = (array, cb) => {
  let newArr = [];
  array.forEach(elem => {
    if (!newArr.includes(elem)) {
      newArr.push(elem);
    }
  });
  cb(newArr);
};
