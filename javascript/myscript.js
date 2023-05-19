/* 
Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50. */


const arrayNumber = [];
let sumNumber = 0;

while (sumNumber < 50){
    userNumber = parseInt(prompt('Inserisci un numero'));

    arrayNumber.push(userNumber);
    sumNumber += userNumber;
}

console.log(arrayNumber);

