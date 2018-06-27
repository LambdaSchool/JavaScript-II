const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  
  const item =cb(arr);
  console.log(item);
}

function printItem(items){
return items[0];;
}

firstItem(items,printItem)





function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  
  const item = cb(arr);
  console.log(item);
}


function printLength(items){
return items.length;;
}

firstItem(items,printLength)




function last(arr, cb) {
  // last passes the last item of the array into the callback
  
  const item =cb(arr);
  console.log(item);
}

function printItem(items){
return items[items.length-1];;
}

last(items,printItem)





function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = cb(x,y);
  console.log (sum);
}

function add(x,y){
	return x+y;
	]
	
sumNums(2,1,add);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.

  const mult = cb(x,y);
  console.log (mult);
}



function mult(x,y){
	return x*y;
}
	
multiplyNums(2,5,mult);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let vlaue = cb(item,list);
  console.log(value);
  
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  console.log(item)
  let value = cb(item,list);
  console.log(value);
  
}

function printMatch(item,list) {
	// for(i=0; i<list.length;  i++){
	// if(list[i] != item) {
    
	// return true } else {
	// return false }
  // }}
  let i = list.indexOf(item)
  console.log(i)
  if(i<0){
    return false}else{
      return true
    }
  }


contains('Notebook',items, printMatch)

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
