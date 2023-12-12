// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function reverseString(str) {
    // Step 1) Utilizzare il metodo split() per restituire un nuovo array
    let splitString = str.split(""); // let splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    console.log(splitString);

 
    // Step 2) Utilizzare il metodo reverse() per invertire il nuovo array creato
    let reverseArray = splitString.reverse(); // let reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    console.log(reverseArray);

 
    // Step 3. Utilizza il metodo join() per unire tutti gli elementi dell'array in una stringa
    let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"


    console.log(joinArray);
    
    //Step 4.Ritorna alla stringa invertita
    return joinArray; // "olleh"
    
}

function controlReverseString(word, reverseWord, idhtml) { //Creo 3 variabili d'appoggio che uso solo per la funzione che sarebbero gli omonimi di userWord, reverseUserWord e textUtent
        if (word == reverseWord){ //Se user word è uguale alla parola scritta al contrario.
            document.getElementById(idhtml).innerHTML = 'La parola scritta è: ' + word + ' ,ovvero palindroma';
        }
        else{
            document.getElementById(idhtml).innerHTML = 'La parola scritta è: ' + word + ' ,ovvero non è palindroma';

        }
}


const userWord = prompt('Inserisci una parola'); //Chiedo all'utente
console.log('Parola inserita dall utente', userWord, typeof userWord);


reverseString(userWord); //Richiamo la funzione e passo l'argomento userWord


const reverseUserWord = reverseString(userWord); //Creo una variabile che conterrà il return della funzione a cui passo userword
console.log('reverseUserWord',reverseUserWord, typeof reverseUserWord);


controlReverseString(userWord, reverseUserWord, 'textUtent'); 




