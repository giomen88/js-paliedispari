// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Domande da farsi quando scriviamo una funzione
// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?)

const userWord = prompt('Inserisci una parola').trim();

// FUNZIONE
function reverseWord(text) {

    wordArray = text.split('');
    console.log(wordArray);

    let reversedWord = '';

    i = wordArray.length - 1;

    while (i >= 0) {
        reversedWord += wordArray[i].valueOf();
        i--;
    }
    console.log(reversedWord);

    text === reversedWord ? console.log("La parola inserita E' palindroma") : console.log("La parola inserita NON E' palindroma");

    return reversedWord;
}
//

const result = reverseWord(userWord)

console.log(result)