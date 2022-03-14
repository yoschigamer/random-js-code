function multiplyArray(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            array[i] = array[i] * 2
        }
    }
    console.log(array);
    return array
}
multiplyArray([2, 8, 5, 12])
/*Vous devez créer une fonction multiplyEvenArray qui prend en paramètre un tableau et
qui doit retourner un nouveau tableau contenant les nombres impairs et les nombres pairs multipliés par deux.
Ex : [1,2,3] => [1,4,3]*/
