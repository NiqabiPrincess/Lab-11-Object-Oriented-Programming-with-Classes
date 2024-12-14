//* parent/super class
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

//* child class

class PerishableProductProperties extends ProductProperties {
    //constructor adds another attribute
    constructor(name, price, quantity, expirationDate) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.expirationDate = expirationDate;
    }

    //method is overridden from parent class
    toString(){
        return (`Product: ${this.name} | Price: $${this.price} | Quantity: ${this.quantity}`);
    }
}

//* testing parent class
const lipstick = new ProductProperties ("Lipstick in Shade 'Rose Tea' ", 7.99, 20);
console.log(lipstick.toString());