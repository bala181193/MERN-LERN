import mongoose from 'mongoose';

const schema = mongoose.Schema;

const exsitSchema = new schema({
    cinnamon: {
        type: Number
    },
    saffron: {
        type: Number
    },
    mustard: {
        type: Number
    }
})

const condition = mongoose.model('existsColModel', exsitSchema);
export default condition