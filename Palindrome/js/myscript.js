// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// richiesta parola
const word = prompt("Inserisci una parola");

// divisione in lettere (array)
let letters = word.split('');
console.log(letters);

// inversione
letters = letters.reverse();
console.log(letters);

// ricomposizione parola
let wordReverse = letters.join('');

// verifica condizione
let risultato;

if (word == wordReverse) {
    risultato = "La parola è palindroma!"
} else {
    risultato = "La parola non è palindroma."
}

console.log(risultato);