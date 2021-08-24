// Un alert() espone 5 numeri generati casualmente.

const numsToGuess = 5;
const minRandomNum = 1;
const maxRandomNum = 100;


let cpuNums = [];

while (cpuNums.length < numsToGuess){
    let getNum = getRandomNumber(minRandomNum,maxRandomNum);
    if (!cpuNums.includes(getNum)) {
        cpuNums.push(getNum);        
    }
}

alert(cpuNums);


// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

setTimeout (function() {
    let  userNums = [];
    while (userNums.length < numsToGuess){        
        let promptNums = parseInt(prompt("inserisci un numero"));
        if (userNums.includes(promptNums) == false) {         
            userNums.push(promptNums);
        }
    }
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    let guessedNums = [];

    for (let i = 0; i < userNums.length; i++) 
    {
        let userNum = userNums[i];
        if (cpuNums.includes(userNum))
            guessedNums.push(userNum);
        
    }
    
    alert("hai indovinato " + guessedNums.length + " numeri");
    alert("i numeri sono: " + guessedNums);

},3000);






// FUNCTIONS //

function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
