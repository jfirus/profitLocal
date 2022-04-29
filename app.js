const Portfolio = require('./objets/Portfolio');
const Profit = require('./objets/profit');

// Tomo las fechas enviadas en los argumentos
let date1 = process.argv[2]; //MM-DD-AAAA
let date2 = process.argv[3]; //MM-DD-AAAA
let profit = Object.create(Profit);

// Obtengo los stocks
Portfolio.getStocks();

//Calculo el profit y muestro por pantalla
profit = Portfolio.profit(date1, date2);
console.log('***************************');
console.log('El profit del portfolio es:');
console.log('Acumulado entre las fechas: ' + Number.parseFloat(profit.pricebetweenDates).toFixed(2));
console.log('Anualizado: ' +  Number.parseFloat(profit.priceAccumulated).toFixed(2));
console.log('***************************');
