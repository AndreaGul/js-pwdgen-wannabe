const elementNome = document.getElementById('nome');
const elementCognome = document.getElementById('cognome');
const elementColore = document.getElementById('colore');
const elementNumber = document.getElementById('numero');

const number = 7;

//funzione per prendere un numero casuale
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//do a randomNumber un valore casuale che va da 0  a 99
let randomNumber = getRandomInt(100);

// chiedo all'utente di inserire i dati che vengono chiesti
elementNome.innerHTML = prompt('inserisci il tuo nome');
elementCognome.innerHTML = prompt('inserisci il tuo cognome');
elementColore.innerHTML = prompt('inserisci il tuo colore preferito');

// do a elementNumber il valore di randomNumber
elementNumber.innerHTML = randomNumber;

// mostra gli elementi all'interno della console
console.log(
  elementNome.innerHTML +
    elementCognome.innerHTML +
    elementColore.innerHTML +
    randomNumber
);
