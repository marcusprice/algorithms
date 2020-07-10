const { bubbleSort } = require('./sorting');
const { generateRandomArray } = require('./lib/tools');

//sorting
const arr = generateRandomArray(10, 20);
console.log(arr);
const sortedArray = bubbleSort(arr);
console.log(sortedArray);
