/*
Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.*/

let randomNumber = Math.floor(Math.random() * (101 - 1) + 1);

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

console.log('Tentativi: ' +i);
