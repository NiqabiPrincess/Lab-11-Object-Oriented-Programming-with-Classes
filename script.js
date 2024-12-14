class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    //method to return total value of product
    getTotalValue(){
        return ("Total Value: " + this.quantity*this.price);
    }

    //method to state product attributes
    toString(){
        return (`Product: ${this.name} | Price: $${this.price} | Quantity: ${this.quantity}`);
    }


}