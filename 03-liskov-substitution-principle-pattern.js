class ProductStorage {
    constructor() {
        this.products = [];
    }

    get length() {
        return this.products.length;
    }

    store(product) {
        this.products.push(product);
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    save(storage) {
        storage.store({name: this.name, price: this.price});
        return storage.length;
    }
}

class DiscountProduct extends Product {
    constructor(name, price, discount) {
        super(name, price);
        this.discount = discount;
    }

    save(storage) {
        let discountedProduct = {
            name: this.name, 
            price: this.price * (1 - this.discount)
        };
        storage.store(discountedProduct);
        // Este return seria una violación de LSP siempre tiene que devolver lo mismo que el padre
        // return discounProduct
        return storage.length;
    }
}

let products = [
    {name: 'iPhone', price: 1200.8},
    {name: 'MacBook Pro', price: 2750.6},
    {name: 'iMac Pro', price: 3600.8, discount: 0.2}
]

function insertAll(products) {
    let storage = new ProductStorage();

    for (let p of products) {
        let product;
        if (p.discount) {
            product = new DiscountProduct(p.name, p.price, p.discount);
        } else {
            product = new Product(p.name, p.price); 
        }

        let count = product.save(storage);

        console.log(`Product inserted. ${count} products in total`);
    }
}
insertAll(products);