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
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    //method is overridden from parent class
    toString(){
        return (`Product: ${this.name} | Price: $${this.price} | Quantity: ${this.quantity} | Expiration Date: ${this.expirationDate}`);
    }
}

//* testing parent class
const lipstick = new ProductProperties ("Lipstick in Shade 'Rose Tea' ", 7.99, 20);
console.log(lipstick.toString());

//* testing child class
const milk = new PerishableProductProperties ("Milk", 1.50, 10, '2024-12-31');
console.log(milk.toString());

const mushroom = new PerishableProductProperties ("Cremini Mushrooms", 3.72, 37, '2024-12-28');
console.log(mushroom.toString());