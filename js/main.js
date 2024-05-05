

let numeriCasuali

// Genera i numeri casuali subito
numeriCasuali = generaNumeri(1, 100, 5); 
console.log(generaNumeri(1,100,5))
document.getElementById("numbers-box").innerHTML = "Numeri casuali: " + numeriCasuali.join(", ");

// Attendi 3 secondi prima di mostrare i prompt
setTimeout(function(){
    let numeriUtente = [];
    while(numeriUtente.length < 5) {
        let numero = prompt("Inserisci un numero:");
        numeriUtente.push(Number(numero));
    }
    console.log("Numeri inseriti dall'utente:", numeriUtente);
    
    // Confronto degli array
    let numeriIndovinati = numeriCasuali.filter(numero => numeriUtente.includes(numero));
    console.log("Numeri indovinati:", numeriIndovinati);
    
    document.getElementById("numbers-box").innerHTML = "numeri indovinati: " + numeriIndovinati.join(", ");
},10*3000);

// funzione genera numeri
function generaNumeri(minimo, massimo, quantità) {
    let numeriGenerati = [];
    for (let i = 0; i < quantità; i++) {
        let numeroCasuale = Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
        numeriGenerati.push(numeroCasuale);
    }
    return numeriGenerati;
}
 

