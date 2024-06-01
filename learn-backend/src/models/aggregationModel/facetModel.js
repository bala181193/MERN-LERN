
import mongoose from "mongoose";
const schema = mongoose.Schema;

const facetSchema = new schema({
    // tittle: {
    //     type: String
    // },
    // artist: {
    //     type: String
    // },
    // price: {
    //     type: Number
    // },
    // tags: {
    //     type: Array
    // },
    // year: {
    //     type: Number
    // }

    item: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const order = mongoose.model('facetCol', facetSchema);
export default order