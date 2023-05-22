/*
Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.*/

/*let randomNumber = Math.floor(Math.random() * (101 - 1) + 1);

console.log(randomNumber);

let i = 0; //attempts

let userNumber = parseInt(prompt('Inserisci un numero'));

while (userNumber != randomNumber){

    userNumber = parseInt(prompt('Inserisci un numero'));

    if (userNumber < randomNumber){
        console.log('Hai digitato ' +userNumber + ', il valore da indovinare è più alto');
        console.log(userNumber);
    }else if(userNumber > randomNumber){
        console.log('Hai digitato '+userNumber +', il valore da indovinare è più basso');
    }else{
        console.log('Hai indovinato il valore!!!');
    }
    i++;
}

console.log('Tentativi: ' +i); */



/* calcola la somma e la media dei primi 10 numeri*/

/*let sum = 0;
let media = 0;

for (let i = 1; i < 11; i++){
    sum += i;
    media = sum / 10;
}

console.log(media); */

/*Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.*/



let wordA = prompt ('Inserisci una parola');
let wordB = prompt ('Inserisci una second parola');

sameWordLength (wordA, wordB)

function sameWordLength (firstWord, secondWord){
    if (firstWord.length == secondWord.length){
        console.log('Sono lunghe uguali');                                  //NON SI UTILIZZANO MAI VARIABILI GLOBALI DENTRO LA FUNCTION
    } else if (firstWord.length > secondWord.length){
        console.log('la prima è la più lunga');
    } else{
        console.log('la seconda parola è la più lunga');
    }
}


/*************** Riccardo's solution **************/


/*const parolaUno = prompt ('Inserisci la prima parola');
const parolaDue = prompt ('Inserisci la seconda parola');

if ( areWordsLongTheSame (firstWord, secondWord)){
    console.log('Sono lunghe uguali');
} else if (parolaUno.length > parolaDue.length){
    console.log('la prima è la più lunga');

}else{
    console.log('la seconda parola è la più lunga');
}

function areWordsLongTheSame (firstWord, secondWord){
    if ( firstWord.length === secondWord.length){
        return true;
    }
    return false;
}*/





