import mongoose from "mongoose";

const objectId = mongoose.Schema.Types.ObjectId;

const itemsSchema = new mongoose.Schema({
    productName: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0

    },
    qty: {
        type: Number,
        default: 0
    },
    productId: {
        type: objectId,
        ref: "products"
    },
})
const cartSchema = new mongoose.Schema({
    userId: {
        type: objectId,
        ref: "users"
    },
    items: [itemsSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const cartModel = mongoose.model('carts', cartSchema)

export default cartModel
