import fs from 'fs/promises'
import { Product } from './Product.js'

export class ProductManager {
  constructor(path) {
    this.path = path
  }

  async addProduct(datosProducto) {
    const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const product = new Product({id: newId, ...datosProducto})
    products.push(product)
    await fs.writeFile(this.path, JSON.stringify(products, null, 2))
    return product
  }

  async getProducts() {
    const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    return products
  }

  async getProductById(id) {
    const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    const product = products.find(p => p.id === id)
    return product
  }

  async updateProduct(id, property, value) {
    const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex !== -1) {
      if (products[productIndex].hasOwnProperty(property)) {
        products[productIndex][property] = value;
        await fs.writeFile(this.path, JSON.stringify(products, null, 2));
        return products[productIndex];
      } else {
        throw new Error(`El campo "${property}" no existe en el producto.`);
      }
    } else {
      throw new Error(`Producto con ID ${id} no encontrado.`);
    }
  }

  async deleteProduct(id) {
    const products = JSON.parse(await fs.readFile(this.path, 'utf-8'));
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex !== -1) {
      products.splice(productIndex, 1);
      await fs.writeFile(this.path, JSON.stringify(products, null, 2));
      return true;
    } else {
      throw new Error(`Producto con ID ${id} no encontrado.`);
    }
  }
  
}

