

import mongoose from "mongoose";
const schema = mongoose.Schema;

const arrayAggregationSchema = new schema({

    name: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    nameObj: {
        type: Object
    },
    item: {
        type: String
    },
    uniqueStringId: {
        type: String
    },
    favorites: {
        type: Array
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    uniqueNumberId: {
        type: Number
    },
    summary: {
        type: String
    },
    updatedSubjects: {
        type: Array
    },
    userInfo: {
        type: Object
    },
    orderNumber: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const arrayAggreegation = mongoose.model('array-aggregation', arrayAggregationSchema);
export default arrayAggreegation