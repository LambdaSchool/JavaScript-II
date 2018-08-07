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
  return cb(arr);
}

  function length(items) {
    console.log(items.length);
}    

 getLength(items, length); 

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

  function last(items) {
    console.log(items[3])
  }

last(items, last);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb;
}
  function callBack(x, y) {
    console.log(x + y);
  }
callBack(4, 5);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb;
}
  function multCallBack(x, y) {
    console.log(x *y);
  }
multCallBack(4, 5);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb;
}
  function doesItContain(item, [list]) {
    if ([list].includes(item)) {
      console.log("true")
    }
    else {
      console.log("false")
    }
  }

doesItContain("pencil", ["pencil","pen", "eraser", "paperclip"]);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
