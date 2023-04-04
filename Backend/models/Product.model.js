const mongoose = require("mongoose")

const productSchema = mongoose.Schema({ 
    name: String,
    category: String,
    rating: Number,
    reviews: Number,
    original_price: Number,
    discount: Number,
    isAvailable: Boolean,
    isSuperSaver:Boolean,
    image: Array,
    color: Array
})

const ProductModel = mongoose.model("products", productSchema)
module.exports = { ProductModel }