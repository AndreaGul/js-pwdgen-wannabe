const elementNome = document.getElementById('nome');
const elementCognome = document.getElementById('cognome');
const elementColore = document.getElementById('colore');
const elementNumber = document.getElementById('numero');

const number = 7;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let randomNumber = getRandomInt(100);

elementNome.innerHTML = prompt('inserisci il tuo nome');
elementCognome.innerHTML = prompt('inserisci il tuo cognome');
elementColore.innerHTML = prompt('inserisci il tuo colore preferito');
elementNumber.innerHTML = randomNumber;

console.log(
  elementNome.innerHTML +
    elementCognome.innerHTML +
    elementColore.innerHTML +
    randomNumber
);
