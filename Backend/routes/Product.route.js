const express = require("express")
const {ProductModel} = require("../models/Product.model")
const productRoutes = express.Router() 

productRoutes.get("/" , async(req,res) => {
    try{
        let productsItem =await ProductModel.find()
        res.send(productsItem)
        // console.log(productsItem);
    }catch(err){
        res.send("Products Can't get from the Database")
    }
})

productRoutes.post("/post" , async(req,res) => {
    const products = req.body
    console.log(products)
    try{
        // await UserModel.insertMany()
        let productsItem = new ProductModel(products)
        await productsItem.save()
        res.send("Product Added to the Database SuccessFully")
    }catch(err){
        res.send("Product Can't add to the Database")
    }
})
productRoutes.delete("/delete" , async(req,res) => {
    const products = req.body
    console.log(products)
    try{
        // await UserModel.insertMany()
        let productsItem = new ProductModel(products)
        await productsItem.save()
        res.send("Product Added to the Database SuccessFully")
    }catch(err){
        res.send("Product Can't add to the Database")
    }
})
productRoutes.post("/update" , async(req,res) => {
    const products = req.body
    console.log(products)
    try{
        // await UserModel.insertMany()
        let productsItem = new ProductModel(products)
        await productsItem.save()
        res.send("Product Added to the Database SuccessFully")
    }catch(err){
        res.send("Product Can't add to the Database")
    }
})

module.exports={productRoutes}