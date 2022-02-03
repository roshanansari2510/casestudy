const Router = require('express');

module.exports=(app)=>{

    const express=require('express');

    const ROUTER=express.Router();

    const UserController=require('./user-controller');


    ROUTER.get('/users',UserController.findAll);
    ROUTER.get('/users/:email',UserController.findOne);
    ROUTER.get('/users/:id',UserController.findByPk);
    ROUTER.post('/users/add',UserController.createUser);
    ROUTER.put('/users/update/:id',UserController.updateUser);
    ROUTER.delete('/users/delete/:id',UserController.deleteUser);

    const productController=require('./product-controller');

    ROUTER.get('/products',productController.findAll);
    ROUTER.get('/products/:id',productController.findByPk);
    // ROUTER.post('/products/add',productController.createUser);
    // ROUTER.put('/products/update/:id',productController.updateUser);
    ROUTER.delete('/products/delete/:id',productController.deleteProduct);

    // const cartController=require('./cart-controller');
    // ROUTER.get('/carts',cartController.findAll);
    // ROUTER.get('/carts/:id',cartController.findByPk);
    // ROUTER.post('carts/add',cartController.createCart);
    // ROUTER.put('/carts/update/:id',cartController.updateCart);
    // ROUTER.delete('/carts/delete/:id',cartController.deleteCart);

    app.use('/app',ROUTER);

};