function unscrambled(chaîne) {
    var chaîne = chaîne.split('oeuf').join(''); 
    console.log(chaîne);
    return chaîne
}
unscrambled("doeufioeufx")
/*La fonction unscrambled prendra en paramètre 1 chaîne de caractères et devra retourner une chaîne de caractères 
sans les occurences du mot oeuf.
Exemple : unscrambled('doeufioeufx') => dix.
Vous pouvez utiliser une méthode de l'objet String et une méthode de l'objet Array*/