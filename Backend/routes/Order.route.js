const express = require("express")
const { OrderModel } = require("../models/Order.model")
const orderRoutes = express.Router()

orderRoutes.get("/", async (req, res) => {
    try {
        let ordersItem = await OrderModel.find()
        res.send(ordersItem)
        // console.log(productsItem);
    } catch (err) {
        res.send("Orders Can't get from the Database")
    }
})

orderRoutes.post("/post", async (req, res) => {
    const orders = req.body
    console.log(orders)
    try {
        // await UserModel.insertMany()
        let ordersItem = new OrderModel(orders)
        await ordersItem.save()
        res.send("Order Added to the Database SuccessFully")
    } catch (err) {
        res.send("Order Can't add to the Database")
    }
})
orderRoutes.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    // console.log(id)
    try {
        // await UserModel.insertMany()
        await OrderModel.findByIdAndDelete({ "_id": id })
        res.send("Order Delete from the Database SuccessFully")
    } catch (err) {
        res.send("Order Can't Delete from the Database")
    }
})
module.exports = { orderRoutes }
