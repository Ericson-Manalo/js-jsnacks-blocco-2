/*Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.

Bonus:
crea un peperone con una funzione*/

const peperoni = [
    {
        varietà: '',
        peso: 1,
        lunghezza: 2
    },
    {
        varietà: '',
        peso: 1,
        lunghezza: 2
    },
    {
        varietà: '',
        peso: 1,
        lunghezza: 2
    },
    {
        varietà: '',
        peso: 1,
        lunghezza: 2
    },
    {
        varietà: '',
        peso: 1,
        lunghezza: 2
    },
    {
        varietà: '',
        peso: 1,
        lunghezza: 2
    },
    {
        varietà: '',
        peso: 1,
        lunghezza: 2
    },
    {
        varietà: '',
        peso: 1,
        lunghezza: 2
    },
    {
        varietà: '',
        peso: 1,
        lunghezza: 2
    },
    {
        varietà: '',
        peso: 1,
        lunghezza: 2
    },
];

console.log(peperoni);

let totalSum = 0;

for ( let i = 0; i < peperoni.length; i++){
    totalSum += peperoni[i].peso;
}

console.log(totalSum);






