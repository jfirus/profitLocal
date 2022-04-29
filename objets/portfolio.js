const Stock = require('./stock');
const Profit = require('./profit');
const fs = require('fs');
const path = require('path');

const Portfolio = {
    stocks : [],

    getStocks : function () {
        const stockFilePath = path.join(__dirname, '../data/stock.json');
        this.stocks= JSON.parse(fs.readFileSync(stockFilePath, 'utf-8'));
    
        this.stocks = this.stocks.map(function(obj){
            let stockAux = Object.create(Stock);
                stockAux.stockName = obj.stockName;
                stockAux.quantity = obj.quantity;
            return stockAux;
        });
    },
    price: function(Stock, date){
        return Stock.getPrice(date);
    },
    getDifference: function(date1, date2) {  
        date1 = new Date(date1);
        date2 = new Date(date2);

        const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
        day = 1000*60*60*24;
        return(date2utc - date1utc)/day
    },
    profit : function(date1, date2)
    {
        let profit = Object.create(Profit);

        // Calculo la diferencia entre las fechas
        let diffDate = this.getDifference(date1,date2);
        
        console.log('**** Los stocks que contiene el portfolio son *****');
        console.log(this.stocks);
        console.log('**** **************************************** *****');
        //Recorre el array de stocks
        this.stocks.forEach(element =>{
            //Por cada elemento busco el precio y el precio lo multiplico por la cantidad de acciones que tiene
            let price1 = this.price(element, date1) * element.quantity;
            let price2 = this.price(element, date2) * element.quantity;
         
            console.log('Para el elemento: ' + element.stockName + ', los precios son: precio1: ' + price1 + ' y precio2: ' + price2);

            profit.pricebetweenDates += price2-price1;
            profit.priceAccumulated += (profit.pricebetweenDates * 365)/diffDate;
        });

        return profit;
    }
};
module.exports = Portfolio;