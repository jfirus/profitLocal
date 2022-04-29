//import { argv } from 'process';

const Portfolio = require('./objets/Portfolio');
const Profit = require('./objets/profit');
/*
const http = require('http');
http.createServer(function(req, res){
    res.write('Servidor de Node');
    res.end();
}).listen(3000, function(){
    console.log('Server Running')
});
*/

/*
argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
*/
//console.log('argumentos' + process.argv[3]);

/*
let date1 = '01-01-2021'; //MM-DD-AAAA
let date2 = '02-01-2021'; //MM-DD-AAAA
*/
let date1 = process.argv[2]; //MM-DD-AAAA
let date2 = process.argv[3]; //MM-DD-AAAA
let profit = Object.create(Profit);
//Creo un objeto de ese tipo

Portfolio.getStocks();

profit = Portfolio.profit(date1, date2);
console.log('***************************');
console.log('El profit del portfolio es:');
console.log('Acumulado entre las fechas: ' + profit.pricebetweenDates);
console.log('Anualizado: ' + profit.priceAccumulated);
console.log('***************************');