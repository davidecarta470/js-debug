/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
//errore nella condizione (se i=0 non è maggiore di 5 ,la condizione è falsa e il ciclo non eseguito...utilizzare una condizione vera)


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
//errore nella condizione(utilizzando il simbolo = ,si sta assegnando un valore anziche confrontarlo...il simbolo corretto è ===  )


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
// errore sintassi(assegnazione condizione ed incremento nella parentesi vanno separate da un punto e virgola)


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
// errori:
// -punto e virgola dopo i++ non ci va
// -punto e virgola dopo l'if non ci va.
// -(numbers % 2 = 0) è una assegnazione e serve una condizione quindi bisogna usare un operatore di confronto(numbers % 2 = 0)
// -(numbers % 2 = 0) non specifica quale elemento di numbers si deve utilizzare(sarebbe number[i])
// -il push dovrebbe avvenire utilizzando il number[i] e non la i che è invece un indice
// -la condizione i<numbers-1 non necessita del -1
// -il return dovrebbe avvenire al di fuori del ciclo for