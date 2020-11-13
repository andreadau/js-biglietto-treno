// Dichiarazione variabili
var numKm, eta, biglietto;
// Prompt richiesta kilometri
numKm = prompt("Quanti km devi percorrere ?");
// Prompt richiesta età
eta = prompt("Quanti anni hai ?");
// costo biglietto
var biglietto = numKm * 0.21;
// Condizione di non sconto sul biglietto 
if (eta < 18) {
    document.getElementById('costo').innerHTML = biglietto - (biglietto * 0.2) + "€";
} else if (eta >= 18 && eta < 65) {
    document.getElementById('costo').innerHTML = biglietto + "€";
} else {
    document.getElementById('costo').innerHTML = biglietto - (biglietto * 0.4) + "€";
}

 
