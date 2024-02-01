
// On demande à l'utilisateur quel est son âge 
let age = prompt("Quel est votre âge ?")

// Tarif appliqué selon son âge
if (age < 18){
    console.log("Vous bénéficiez d'un tarif réduit");
}else if (age >= 65){
    console.log("Vous bénéficiez d'un tarif senior");
}else{
    console.log("Vous payez plein pot");
}

// Version avec une condition switch

switch (true) {
    case (age < 18):
    case (age >= 65):
        console.log("Bravo ! Vous bénéficiez d'un tarif réduit");
        break;
        default :
        console.log("Vous payez plein pot ! Dommage");
}

