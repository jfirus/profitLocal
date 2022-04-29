const fs = require('fs');
const path = require('path');

const Stock = {
    stockName: '',
    quantity: 0,
   
    getPrice : function(date){
      
        // Tengo que abrir el archivo price.json, y buscar por la fecha, la cotización del stock
        const stockPricesFilePath = path.join(__dirname, '../data/stockPrices.json');
        const stockPrices = JSON.parse(fs.readFileSync(stockPricesFilePath, 'utf-8'));
      
        let price = stockPrices.find(stockPrices => (stockPrices.stockName === this.stockName && stockPrices.date === date ));
        //Valido si tiene resultados para enviar el precio encontrado o 0 si no tiene datos.

        return price === undefined?0: price.price;
    }
};
module.exports = Stock;