//* parent/super class
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    //method to return total value of product
    getTotalValue(){
        return (this.quantity*this.price);
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

    // method for getting total value of store inventory
    getInventoryValue() {
        let totalValue = 0;
        for (let i = 0; i <this.inventory.length; i++){
            totalValue += this.inventory[i].getTotalValue();
        }
        return totalValue.toFixed(2);
    }

    // method for finding products in store inventory
    findProductByName(name){
        for (let i = 0; i < this.inventory.length; i++){
            if (this.inventory[i].name === name){
                return this.inventory[i];
            }
        }
        return null;
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


//* testing store class
console.log("---------------------------------------------------");

const myMarket = new Store();
myMarket.addProduct(lipstick);
myMarket.addProduct(milk);
myMarket.addProduct(mushroom);
console.log("myMarket Total Inventory Value: $" + myMarket.getInventoryValue());

console.log(`Found Item: ${myMarket.findProductByName("Cremini Mushrooms")}`); //case where item is inside myMarket
console.log(`Found Item: ${myMarket.findProductByName("Brownie Mix")}`); //case where item is NOT inside myMark

//* Testing the System, Part 5
console.log("---------------------------------------------------");
console.log("....Testing System....");

const lipTint = new ProductProperties ("Lip Tint", 6.56, 30);
const brownieMix = new ProductProperties ("Brownie Mix", 3.52, 25);
const taco = new ProductProperties ("Taco Diner Kit", 8.76, 15);
//perishable items
const cheese = new PerishableProductProperties ("Cheese", 4.53, 27, "2025-01-05");
const strawberry = new PerishableProductProperties ("Basket of Strawberries", 7.43, 22, "2025-01-02")

const happyBasket = new Store();
happyBasket.addProduct(lipTint);
happyBasket.addProduct(brownieMix)
happyBasket.addProduct(taco)
happyBasket.addProduct()
happyBasket.addProduct

