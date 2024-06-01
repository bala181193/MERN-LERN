import mongoose from "mongoose";


export const dbConnection = () => {
    return mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true }, { useUnifiedTopology: true }, () => {
        console.log("db connected")
    })
}