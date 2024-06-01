
import mongoose from "mongoose";
const schema = mongoose.Schema;

const switchSchema = new schema({

    name: {
        type: String
    },
    scores: {
        type: Array
    },
    price: {
        type: Number
    },
    summary: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const order = mongoose.model('switchModel', switchSchema);
export default order