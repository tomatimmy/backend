class ProductManager {
    constructor() {
        this.elements = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!this.isCodeUnique(code)) {
            console.log("Ya existe un producto con ese código.");
            return;
        }

        if (this.isValidProduct(title, description, price, thumbnail, code, stock)) {
            const newProduct = {
                id: this.nextId,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            };
            this.elements.push(newProduct);
            this.nextId++;
            console.log(`el producto ${title} fué añadido.`);
        }
    }

    getProducts() {
        return this.elements;
    }

    getProductById(id) {
        const product = this.elements.find((p) => p.id === id);
        if (product) {
            return product;
        } else {
            return `El producto con id ${id} no existe.`;
        }
    }

    isCodeUnique(code) {
        return !this.elements.some((p) => p.code === code);
    }

    isValidProduct(title, description, price, thumbnail, code, stock) {
        if (
            title &&
            description &&
            price &&
            thumbnail &&
            code &&
            stock !== undefined
        ) {
            return true;
        } else {
            console.log("Todos los datos tienen que ser completados.");
            return false;
        }
    }
}

//Ejemplo de uso

const productManager = new ProductManager();

//Añadimos 3 productos de los cuales 2 serán únicos y uno será con código repetido para probar la función addProduct.
productManager.addProduct("Buzo Adidas", "Buzo Adidas Canguro Negro", 29.99, "buzoadidascanguro.jpg", "P123", 10);
productManager.addProduct("Remera Nike", "Remera Nike Drifit Roja", 39.99, "remeranike.jpg", "P124", 15);
productManager.addProduct("Remera Puma", "Remera Puma Sport", 10.99, "remerapuma.jpg", "P124", 20);


//Vemos por consola todos los productos creados hasta el momento
console.log(productManager.getProducts());

//Vemos por consola los productos por Id
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));
