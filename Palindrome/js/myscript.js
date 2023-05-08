// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// richiesta parola
let word = prompt("Inserisci una parola");

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
    result = "La parola è palindroma!"
} else {
    result = "La parola non è palindroma."
}

// output
console.log(result);
document.getElementById("risultato").innerHTML = result;


// CON FUNZIONE
// richiesta parola
word = prompt("Inserisci una parola");

// inversione
wordReverse = reverse(word);

// verifica condizione
if (word == wordReverse) {
    resultTwo = "La seconda parola è palindroma!"
} else {
    resultTwo = "La seconda parola non è palindroma."
}

// funzione
function reverse(word) {
    wordReverse = word.split('').reverse().join('');
    return wordReverse;
}

// output
document.getElementById("risultato2").innerHTML = resultTwo