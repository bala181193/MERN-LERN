import mongoose from "mongoose";

const Schema = mongoose.Schema;

const salesSchema = new Schema({
    item: {
        type: String
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const order = mongoose.model("sales", salesSchema, 'sales');
export default order;
