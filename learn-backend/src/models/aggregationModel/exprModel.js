
import mongoose from "mongoose";
const schema = mongoose.Schema;
const ObjectId = schema.ObjectId;

const orderSchema = new schema({
    category: {
        type: String
    },
    budget: {
        type: Number
    },
    spent: {
        type: Number
    }
})

const order = mongoose.model('ordersExpr', orderSchema);
export default order