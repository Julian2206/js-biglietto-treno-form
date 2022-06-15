/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.26 € al km)
va applicato uno sconto del 15% per i minorenni
va applicato uno sconto del 35% per gli over 65. */

/* Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. */

/* Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questo screenshot potrebbe essere un’implementazione da seguire per il secondo milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra. */

//document === DOM
//prompt

const distance = parseInt(prompt("insert km:"));
const age = parseInt(prompt("Insert your age:"));

let message;

let price = distance * 0.26;
console.log("The ticket price is: " + price, "$");

const usrDistance = document.getElementById("usrDistance");

const usrAge = document.getElementById("usrAge");

const button = document.getElementById("button");

button.addEventListener("click", function () {
  if (age < 18) {
    price = price - (price * 15) / 100;
    message = "15% discount your new price is:" + price.toFixed(2) + "$";
    console.log(message);
  } else if (age > 65) {
    price = price - (price * 35) / 100;
    message = "35% discount your new price is:" + price.toFixed(2) + "$";
    console.log(message);
  } else {
    message = "Your price is:" + price.toFixed(2) + "$";
    console.log(message);
  }
});

/* const button = document.getElementById("#button");
document.getElementById("#button").onclick = function () {
  let usrDistance = document.getElementById("#usrDistance").value;
  console.log("your distance is:", usrDistance);

  let usrAge = document.getElementById("#usrAge").value;
  console.log("your age is:", usrAge);
}; */

//console.log(usrDistance.value);
//console.log(usrAge.value);
