// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Domande da farsi quando scriviamo una funzione
// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?)


// FUNZIONE
function getRandomNumber(min, max) {

    return randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
}
//

// FUNZIONE
function isEven(number) {

    let result = 'dispari';

    if (number % 2 === 0) {
        result = 'pari';
    }

    return result;
}
//

let userChoice = (prompt('Scegli pari o dispari')).trim().toLowerCase();
while (userChoice !== 'pari' && userChoice !== 'dispari') {
    userChoice = (prompt('Scegli pari o dispari')).trim().toLowerCase();
}
console.log(userChoice);

let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
}
console.log(userNumber);

const pcNumber = getRandomNumber(1, 5);
console.log(pcNumber);

const sum = userNumber + pcNumber;
console.log(sum);

const response = isEven(sum);
console.log(response)

response == userChoice ? console.log('HAI VINTO') : console.log('HAI PERSO');





