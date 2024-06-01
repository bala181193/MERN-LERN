import express from 'express';
import dotEnv from 'dotenv';
import passport from 'passport';
import morgan from 'morgan'
import bodyParser from 'body-parser';

import { dbConnection } from './dbConnection';
import userRoute from './router/userRoute'
import productApi from './router/productRoute'

const app = express()
dotEnv.config()
dbConnection()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize());

require("./config/passport").userAuth(passport)

app.use('/authApi', userRoute)
app.use('/productApi', productApi)

const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];


app.listen(process.env.PORT, () => {
    console.log(`1server is runnin on ${process.env.PORT}`)
})
