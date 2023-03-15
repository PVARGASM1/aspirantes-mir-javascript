function maxIndex(array) {
    if (array.length === 0) {
        return -1;
    }

    let max = array[0];
    let maxIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            maxIndex = "index " + i;
            max = array[i];
        }
    }

    return maxIndex;
}
// escribe la función maxIndex acá

console.log(maxIndex([1, 3, 2])) // => index 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // => index 0
console.log(maxIndex([])) // => -1