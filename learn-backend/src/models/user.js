import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    profileImage: {
        type: String
    },
})

module.exports = mongoose.model('users', useSchema)
