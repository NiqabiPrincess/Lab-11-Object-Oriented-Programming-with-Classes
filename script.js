//* parent/super class
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    //method to return total value of product
    getTotalValue(){
        return ( this.name + " Total Value: $" + (this.quantity*this.price).toFixed(2));
    }

    //method to state product attributes
    toString(){
        return (`Product: ${this.name} | Price: $${this.price.toFixed(2)} | Quantity: ${this.quantity}`);
    }
    //static method for applying discounts
    static applyDiscount(product, discount){
        product.forEach(product => {
            product.price -= product.price * discount;
        });
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
        return (`Product: ${this.name} | Price: $${this.price.toFixed(2)} | Quantity: ${this.quantity} | Expiration Date: ${this.expirationDate}`);
    }
}

//* Store Class
class Store {
    constructor(){
        this.inventory = [];
    }

    // method to add product to inventory array
    addProduct(product){
        this.inventory.push(product);
    }
}



//* testing parent class
const lipstick = new ProductProperties ("Lipstick in Shade 'Rose Tea' ", 7.99, 20);
console.log(lipstick.toString());
console.log(lipstick.getTotalValue());

//* testing child class
console.log("---------------------------------------------------");

const milk = new PerishableProductProperties ("Milk", 1.51, 10, '2024-12-31');
console.log(milk.toString());
console.log(milk.getTotalValue());

const mushroom = new PerishableProductProperties ("Cremini Mushrooms", 3.72, 37, '2024-12-28');
console.log(mushroom.toString());
console.log(mushroom.getTotalValue());

//* testing static method
console.log("---------------------------------------------------");

console.log("40% Discount")
ProductProperties.applyDiscount([lipstick, milk, mushroom], 0.40);
console.log(lipstick.toString());
console.log(milk.toString());
console.log(mushroom.toString());