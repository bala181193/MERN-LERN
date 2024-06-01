import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: ['active', 'deactive'],
        default: 'active'
    },
},
    {
        timestamps: true
    }
)

const SupportCategory = mongoose.model('supportcategory', categorySchema);
export default SupportCategory;