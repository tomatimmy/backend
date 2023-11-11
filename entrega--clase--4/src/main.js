import { ProductManager } from './ProductManager.js'

const pm = new ProductManager('./db/products.json')


/* TESTING */

/* CREAMOS PRODUCTO */

const producto = await pm.addProduct({
  title: 'producto prueba',
  description: 'este es un producto prueba',
  price: 200,
  thumbnail: 'sin imagen',
  code: 'abc1123',
  stock: '25'
})

