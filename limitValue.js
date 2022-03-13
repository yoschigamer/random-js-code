function limitValue(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            array[i] = array[i] * 2
        }
        if (array[i] > 10) {
            array[i] = array[i] - 9
        }
    }
    return array
}
//Vous devez créer une fonction limitValue qui prend en paramètre un tableau d'entier inférieur à 10
//et qui doit retourner un tableau contenant tous les nombres pairs de ce tableau multipliés par 2, et
//si ce nombre est supérieur à 10 lui retirer 9. Les nombres impairs ne sont pas à modifier.
//Ex : [ 1, 6, 4] => [1, 12, 8] => [ 1, 3, 8]