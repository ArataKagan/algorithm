// 1. Out of the sorting algorithms introduced, or any others you have encountered,
// which is the quickest or most efficient in sorting a set of data and why?

// A: Quick sort since the number of comparisons or the number of swaps
// necessary to perform to sort the data is the smallest compared to the other sorting
// algorithms.

// 2. Why is Binary Search more efficient than Linear Search for most cases?

// A: Since you keep dividing an array into half from the mid-point until you find
// the target value, it cuts down the number of compairisons compared to going though
// all elements for the Linear Search.

// 3. Code an implementation of Bubble Sort and test it on an integer array of your choice.

//store an array
var array = [3,6,7,3,2,4,8,9,6,5];

// swap function helper
//i is first element, j is second element
function swap(array, i, j) {
  // store an elemnt i into variable temp
  // so that i and j do not have the same value
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// bubble sort function
function bubbleSortBasic(array) {
  // loop through first element
  for(var i = 0; i < array.length; i++) { 
    // loop through second element
    for(var j = 1; j < array.length; j++) {
      // if second element is greater than first, then swap
      if(array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}

console.log(bubbleSortBasic(array);
