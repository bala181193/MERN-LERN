import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})

const usersModel = mongoose.model('users', useSchema)

export default usersModel
