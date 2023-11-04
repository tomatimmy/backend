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

/* TRAEMOS TODOS LOS PRODUCTOS QUE TIENE EL ARRAY */

const productos = await pm.getProducts()
console.log("Productos que contiene el Array\n")
console.log(productos)

/* TRAEMOS EL PRODUCTO POR ID */ 

const productoPorId = await pm.getProductById(1)
console.log('\n-------------------\n')
console.log("Producto con ID 1\n")
console.log(productoPorId)

/* MODIFICAMOS EL CAMPO PRECIO DEL PRODUCTO 1 */

const updateProduct = await pm.updateProduct(1, 'price', 300)
console.log('\n-------------------\n')
console.log("Producto con campo precio modificado\n")
console.log(updateProduct)

/* BORRAMOS EL PRODUCTO */

await pm.deleteProduct(1)
console.log('\n-------------------\n')
console.log("Producto eliminado")
console.log("Gracias, vuelva pronto\n")
