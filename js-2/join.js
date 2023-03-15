function join (array) {

    let solution = "";

    for (let i = 0;  i < array.length; i++) {

        solution += array[i];
     
        if (i < array.length - 1){

            solution += " ";
        }
    }
return solution;
}


console.log(join([3, 6, 9, 12]))
console.log(join(["Andrea","Carlos","Maria","Juan"]))
console.log(join([false, true]))