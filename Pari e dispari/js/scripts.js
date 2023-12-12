/*Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//Funzioni
function numeroRandom (){
    return Math.floor(Math.random() * 5) + 1;
}


function risultatoPariDispari (number){
    if (number % 2 == 0){
        console.log('Numero pari:', number);
        return 'pari';
    }
    else {
        console.log('Numero dispari:', number);
        return 'dispari';
    }
}

const sceltaPariDispari = prompt('Scegli pari o dispari');
console.log('Pari o dispari', sceltaPariDispari, typeof sceltaPariDispari);

const inserimentoNumero = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Numero scelto dall utente', inserimentoNumero, typeof inserimentoNumero);

const computerRandom = numeroRandom();

console.log('Numero scelto dal pc', computerRandom , typeof computerRandom);

const sommaNumeri = inserimentoNumero + computerRandom; 

console.log('La somma dei due numeri è:', sommaNumeri, typeof sommaNumeri);

risultatoPariDispari(sommaNumeri);

let sommaPariDispari = risultatoPariDispari(sommaNumeri);

console.log(sommaPariDispari, typeof sommaPariDispari);

if (sceltaPariDispari == sommaPariDispari ){
    alert('Hai vinto, hai scelto ' + sceltaPariDispari + ' la somma dei numeri è ' + sommaNumeri + ' che è ' + sommaPariDispari);


    
}
else{
    alert('Hai perso, hai scelto ' + sceltaPariDispari + ' la somma dei numeri è ' + sommaNumeri + ' che è ' + sommaPariDispari);
}





