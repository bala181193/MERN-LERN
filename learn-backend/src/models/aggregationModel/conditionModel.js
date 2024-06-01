import mongoose from 'mongoose';

const schema = mongoose.Schema;

const conditionSchema = new schema({
    item: {
        type: String
    },
    qty: {
        type: Number
    },
    description: {
        type: String
    }
})

const condition = mongoose.model('conditionsCol', conditionSchema);
export default condition