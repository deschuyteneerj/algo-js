array1 = [34, 11, 2, 29, 18, 23, 15, 19, 59, 58, 62, 39, 48, 53, 45, 69];
array2 = [74, 81, 92, 69, 58, 43, 35, 29, 19, 54, 42, 39, 28, 33, 15, 9];

function sortArray(array) {
    let count = array.length-1;

    for (let i=0; i<count; i++) {
        for (let j=0; j<count; j++) {
            if (array[j]>array[j + 1]) {
                swap = array[j + 1];
                array[j + 1] = array[j];
                array[j] = swap;
            }
        }
    }
    return array;
}

console.log(sortArray(array1));
console.log(sortArray(array2));
