const productController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api/products', productController.getAllProducts);
    app.post('/api/products', productController.createProduct);
    app.get('/api/products/:id', productController.getProduct);
    app.put('/api/products/:id', productController.updateProduct);
    app.delete('/api/products/:id', productController.deleteProduct);
}