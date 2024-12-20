/* Exercice 1 - fonction javascript

Créer une fonction qui prend en paramètre deux nombres et le type d'opération.
Vérifier le type d'opération et effectuer le calcul correspondant.
Renvoyer le résultat. */



const addition = (a,b)=> a + b;
const soustraction = (a,b) => a - b;
const division = (a,b) => a / b;
const multiplication = (a,b) => a * b;
console.log("***** Calculatrice *****");
function calculatrice(a , b, x ){
    if (x == "addition"){
        console.log(addition(a,b));
    } 
    else if (x == "soustraction"){
        console.log(soustraction(a,b));
    }
    else if (x == "division"){
        console.log(division(a,b));
    }
    else if (x == "multiplication"){
        console.log(multiplication(a,b))
    }

   
}
console.log(calculatrice(30,10, "multiplication"))

