function nbDiviseur(NBD) {
    var array = []

    for (var i = 0; i <= NBD; i++) {

        if (NBD % i == 0) {
            array.push(i)
        }
    }
    return array.length
}
nbDiviseur(50)
/*La fonction nbDiviseur prendra en paramètre 1 entier et devra retourner son nombre de diviseurs.
Exemple : nbDiviseur(5) => 2 les diviseurs sont 1 et 5.*/