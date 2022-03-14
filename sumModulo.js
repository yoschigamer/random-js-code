var sum = 0
function sumModuloTen(array) {
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    if (sum%10 == 0){
        console.log(sum, 'true');
        return true
    }
    else {
        console.log(sum, 'false');
        return false
    }
}
sumModuloTen([1, 2, 3, 10, 24])
/*Vous devez créer une fonction sumModuloTen qui prend en paramètre un tableau et 
qui doit retourner true si la somme des éléments de ce tableau est modulable par 10, false si elle ne l’est pas.*/