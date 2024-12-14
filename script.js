class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue(){
        return ("Total Value: " + this.quantity*this.price);
    }

}