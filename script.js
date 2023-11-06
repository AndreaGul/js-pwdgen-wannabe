'use strict';

const elementPassword = document.getElementById('password');

//numero fisso
const number = 7;

//funzione per generare un numero casuale
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//dichiariamo la variabile e la facciamo definire dall'utente
let nome = prompt('inserisci il tuo nome');
let cognome = prompt('inserisci il tuo cognome');
let colore = prompt('inserisci il tuo colore preferito');
//do a randomNumber un valore casuale che va da 0  a 99
let randomNumber = getRandomInt(100);

//creo un variabile password
let password;

//unisco tutte le varibili per crare la password
password = nome + cognome + colore + randomNumber;

//do a elementPassword iil valore di passwrod cosi da farlo visualizzare nell'html
elementPassword.innerHTML = password;

//visualizzo password nella console
console.log(password);
