const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}
firstItem(items, function(first){
  console.log(first);
})

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length)
}
getLength(items, function(length){
  console.log(length);
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[items.length-1])
}
last(items, function(minus1){
  console.log(minus1);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}
sumNums(2, 4, function(check){
console.log(check);
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}
multiplyNums(4,6, function(mult){
  console.log(mult);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    for(i=0;i< list.length; i++){
      if (item === list[i]){
        cb(true);    
  }
}
      cb(false);

}
contains("",items, function(test){
  console.log(test);
})



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
