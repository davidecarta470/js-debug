/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) => auto.type === 'Benzina'||auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => auto.type === 'diesel'||auto.type === 'benzina');

const otherCars = cars.filter( (auto) => {
    return (auto.type !== 'diesel' && auto.type !== 'Diesel') && 
           (auto.type !== 'Benzina' && auto.type !== 'benzina');
});

console.log('Auto a benzina');
console.log('-------------------------');
gasolineCars.forEach(gasolineCar => {
    console.log(gasolineCar.manufacturer,gasolineCar.model)
    
});
console.log('*******************************');
console.log('*******************************');
console.log('*******************************');
console.log('Auto a diesel');
console.log('-------------------------');
dieselCars.forEach(dieselCar=> {
    console.log(dieselCar.manufacturer,dieselCar.model)
});
console.log('*******************************');
console.log('*******************************');
console.log('*******************************');
console.log('Tutte le altre auto');
console.log('-------------------------');
otherCars.forEach(otherCar => {
    console.log(otherCar.manufacturer,otherCar.model)
    
});


// errori :virgola prima dell'ultimo elemento dell'array   ;aggiungere condizione auto  benzina e diesel  con la prima maiuscola;
// arrowfunction l'= va prima del > ; mancano i cicli per visualizzare le auto