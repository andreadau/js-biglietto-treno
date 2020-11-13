// Dichiarazione variabili
var numKm, eta, biglietto;
// Prompt richiesta kilometri
numKm = prompt("Quanti km devi percorrere ?");
// Prompt richiesta età
eta = prompt("Quanti anni hai ?");
// Condizione di non sconto sul biglietto 
if (eta > 19 && eta < 65) {
    document.getElementById('costo').innerHTML = numKm * 0.21; 
} else if (eta < 18) {
    document.getElementById('costo').innerHTML = (numKm * 0.21) - ((numKm * 0.21) * 0.2);
}
 
