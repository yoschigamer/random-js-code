var sum = 0;
function sumArray(array) {

    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum, array, array[i])
    return sum
}
sumArray([1, 2, 4])
//additionner un tableau