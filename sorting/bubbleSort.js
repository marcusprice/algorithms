/**
 * 
 * @function bubbleSort
 * @param {Array} arr The array to be sorted
 * @description Sorts an array. Has O(N2) complexity
 * @returns {Array} sorted array 
 */

const bubbleSort = arr => {
    //create local array to sort
    const output = arr;
    //loop through array
    for(let i = 0; i < arr.length; i++) {
        //create secondary loop beginning from the following index of i
        for(let j = i + 1; j < arr.length; j++) {
            //test if i index is larger than j index
            if(output[i] > output[j]) {
                //if i is larger, swap the indexes
                const tempJ = arr[j];       //create tempof the j value
                output[j] = output[i];      //set secondary index value to first index value
                output[i] = tempJ;          //set the first index value to the temp value for j
            }
        }
    }

    //return sorted array
    return output;
}

exports.bubbleSort = bubbleSort;