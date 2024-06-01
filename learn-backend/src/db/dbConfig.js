import mongoose from "mongoose";

export const connecttDb = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/mydbs", { useNewUrlParser: true }, { useUnifiedTopology: true }, () => {
        if (err) {
            console.log(err)
        }
        console.log("db connected")
    });
}

