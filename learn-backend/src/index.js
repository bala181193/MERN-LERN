import express from 'express'
import mongoose from "mongoose";
import path from 'path'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser';
import { connecttDb } from './db/dbConfig'
import authRouter from './routes/routes'
import mongodbRoute from './routes/mongoDbRoutes'

const app = express();

connecttDb()
mongoose.connect("mongodb://127.0.0.1:27017/mydbs", { useNewUrlParser: true }, { useUnifiedTopology: true }, () => {
    console.log("db connected")
});
// create application/json parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/authApi', authRouter)
app.use('/mongoDbAuth', mongodbRoute)


app.listen(5001, () => {
    console.log("5001 running");
})