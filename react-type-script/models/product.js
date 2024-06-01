import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }

})

const productModel = mongoose.model('products', productSchema)

export default productModel
