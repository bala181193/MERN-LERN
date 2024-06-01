import mongoose from 'mongoose';


const buyListschema = new mongoose.Schema({
    amount: {
        type: Number,
        default: 0
    },
    productName: {
        type: String,
        default: ''
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const BuyList = mongoose.model('buyerLists', buyListschema)

export default BuyList