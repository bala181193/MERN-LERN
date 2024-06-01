import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    item: {
        type: String
    },
    receiverId: {
        type: Number,
    },
    ordered: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const order = mongoose.model("orders", orderSchema, 'orders');
export default order;
