import express from 'express';
import { ProductManager } from './ProductManager.js';

const app = express();
const port = 3000;

// Utiliza la ruta correcta al archivo de productos
const productManager = new ProductManager('db/products.json');

app.get('/products', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);

    let products;

    if (!isNaN(limit)) {
      products = await productManager.getProducts();
      products = products.slice(0, limit);
    } else {
      products = await productManager.getProducts();
    }

    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await productManager.getProductById(productId);

    if (product) {
      res.json({ product });
    } else {
      res.status(404).json({ error: `Producto con ID ${productId} no encontrado.` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
