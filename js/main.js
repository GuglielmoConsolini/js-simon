

 function generaNumeri(minimo, massimo , quantità) {

let numeriGenerati = []

for(let i = 0 ; i < quantità ; i++){

let numeroCasuale = Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
numeriGenerati.push(numeroCasuale);

}
return numeriGenerati;
}

numeriGenerati = generaNumeri(1 , 100 , 5);
console.log(numeriGenerati)

document.getElementById("numbers-box").innerHTML = "Ricorda questi numeri: " + numeriGenerati;
   
 

