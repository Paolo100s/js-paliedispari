// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// richieste
let pODUser = prompt("Pari o Dispari?");
const numbUser = parseInt(prompt("Scegli un numero da 1 a 5."));

// generazione numero PC
const numbPc = Math.floor (Math.random() * 5) + 1;
console.log(parseInt(numbPc));

// somma dei numeri
const sum = numbUser + numbPc

// condizione P o D
let result;

if (sum % 2 == 0) {
    result = "Pari"    
} else {
    result = "Dispari"
}

// verifica risultato
let game;

if (pODUser = result) {
    game = "You Win!"
} else {
    game = "You Lose."
}

// output
document.getElementById("game").innerHTML = game;