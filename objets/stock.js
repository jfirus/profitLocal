const Stock = {
    name: '',
    quantity: 0,
    

    
/*
    //Methods setters
    setName : function(_name){
        this.name= _name;
    },
    setQuantity: function(_quantity){
        this.quantity= _quantity;
    },
*/
    //Methods getters
    getname:  function(){
        return this.name;
    },
    getquantity : function(){
        return this.quantity;
    }
};

exports.Stock;