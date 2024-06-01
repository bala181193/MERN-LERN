import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import { generatePassword, comparePassword } from '../config/bcrypt'

import User from '../models/user'
import SupportCategory from '../models/supportCategory';
import SupportTicket from '../models/supportTicket';
import BuyList from '../models/buyerList';
import Order from '../models/order';
import Sales from '../models/sales'
const multer = require('multer');
const path = require('path')
const ObjectId = mongoose.Types.ObjectId;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({
    storage: storage,
    limits: 2 * 1000 * 1000,
    fileFilter: function (req, file, cb) {
        let fileType = /jpeg|jpg|png|/
        let mimeType = fileType.test(file.mimetype);
        let extName = fileType.test(path.extname(file.originalname))
        if (mimeType && extName) {
            return cb(null, true)
        }
        cb("error occured")
    }
}).single('profileImage')
export const imageUpload = (req, res, next) => {
    upload(req, res, (err) => {
        console.log(err)
        console.log("reqfileeeee", req.file)
        return next();
    })

}

export const login = async (req, res) => {
    console.log("aaaaaaaaaaaaa");
    const checkUser = await User.findOne({ email: req.body.email });
    if (!checkUser) {
        return res.status(400).json({ message: "Invalid user" })
    }
    const checkPassword = await comparePassword(req.body.password, checkUser.password)
    console.log(checkPassword)
    if (!checkPassword) {
        return res.status(400).json({ message: "Invalid Password" })
    }
}


export const register = async (req, res) => {
    try {

        const userData = new User({
            firstName: req.body.firstName,
            email: req.body.email,
            password: await generatePassword(req.body.password),
            mobileNumber: req.body.mobileNumber,
            profileImage: req.file.filename

        })
        await userData.save();
        console.log(userData)
        return res.status(200).json({ message: "Added successfully" })
    } catch (err) {
        console.log(err)
    }
}

export const getUserDetail = async (req, res) => {
    try {
        const userDetail = await User.findOne({ _id: ObjectId(req.params.userId) })
        return res.status(200).json({ result: userDetail })

    } catch (err) {
        console.log(err)
    }
}

export const productBuy = async (req, res) => {
    try {
        console.log(req.body)
        const buyData = new BuyList({
            amount: req.body.amount,
            productName: req.body.productName,
            userId: req.body.userId

        })
        await buyData.save();
        console.log(buyData)
        return res.status(200).json({ message: "Added successfully" })
    } catch (err) {
        console.log(err)
    }
}


export const getBuyerList = async (req, res) => {
    try {
        // const buyListData = await BuyList.find({}).select({ amount: 1 })
        // const buyListData = await BuyList.find({}, { amount: 1 })
        const buyListData = await BuyList.find({}, { productName: 1 }).populate('userId', ['email', 'firstName'])
        return res.status(200).json({ result: buyListData })

    } catch (err) {
        console.log(err)

    }
}

export const addGategory = async (req, res) => {

    try {
        let newDoc = new SupportCategory({
            'categoryName': req.body.categoryName
        })
        await newDoc.save()
        return res.status(200).json({ "success": false, 'result': { 'messages': "Added successfully" } })
    } catch (err) {
        console.log(err)
    }
}

export const createTicket = async (req, res) => {

    try {
        let newDoc = new SupportTicket({});
        newDoc.userId = req.body.userId;
        newDoc.adminId = req.body.adminId;
        newDoc.categoryId = req.body.categoryId;
        newDoc.reply = [{
            'senderId': req.body.senderId,
            'receiverId': req.body.receiverId,
            'message': req.body.message,
            'messageBy': req.body.messageBy,
            'image': req.body.image
        }]
        newDoc.tickerId = Math.random()
        await newDoc.save();
        console.log(newDoc)

        return res.status(200).json({ "success": false, 'result': { 'messages': "Added successfully" } })

    } catch (err) {
        console.log(err)
    }
}

export const getTicketList = async (req, res) => {
    try {


        // const array = [
        //     { "item": "abc", "price": parseFloat("10"), "quantity": parseFloat("2"), "date": new Date("2014-03-01T08:00:00Z") },
        //     { "item": "jkl", "price": parseFloat("20"), "quantity": parseFloat("1"), "date": new Date("2014-03-01T09:00:00Z") },
        //     { "item": "xyz", "price": parseFloat("5"), "quantity": parseFloat("10"), "date": new Date("2014-03-15T09:00:00Z") },
        //     { "item": "xyz", "price": parseFloat("5"), "quantity": parseFloat("20"), "date": new Date("2014-04-04T11:21:39.736Z") },
        //     { "item": "abc", "price": parseFloat("10"), "quantity": parseFloat("10"), "date": new Date("2014-04-04T21:23:13.331Z") },
        //     { "item": "def", "price": parseFloat("7.5"), "quantity": parseFloat("5"), "date": new Date("2015-06-04T05:08:13Z") },
        //     { "item": "def", "price": parseFloat("7.5"), "quantity": parseFloat("10"), "date": new Date("2015-09-10T08:43:00Z") },
        //     { "item": "abc", "price": parseFloat("10"), "quantity": parseFloat("5"), "date": new Date("2016-02-06T20:20:13Z") },
        // ]

        // const salesdata = await Sales.insertMany(array)
        // const PriceQtySum = await Sales.aggregate([
        //     {
        //         $group:
        //         {
        //             _id: { day: { $dayOfYear: "$date" }, yaer: { $year: "$date" } },
        //         },
        //         totalAmout: { $sum: { $multiply: ['$price', '$quantity'] } },
        //     },
        // ])
        // return res.status(200).json({ "success": false, 'result': salesdata })

        // const id = req.params.ticketObjectId
        // console.log(id);
        // const data = await SupportTicket.findOne({ _id: '664758f76892d0e4c3421031' })
        // // console.log(data)
        // const supportTicketData = await SupportTicket.aggregate([
        //     {
        //         $match: { _id: new ObjectId(id) },
        //     },
        //     {
        //         $lookup: {
        //             from: 'supportcategories',
        //             localField: 'categoryId',
        //             foreignField: '_id',
        //             as: 'category'

        //         },
        //     },
        //     { $unwind: '$category' },
        //     {
        //         $lookup: {
        //             from: 'users',
        //             localField: 'userId',
        //             foreignField: '_id',
        //             as: 'userInfo'

        //         },
        //     },
        //     { $unwind: '$userInfo' },
        //     {
        //         $lookup: {
        //             from: 'users',
        //             localField: 'adminId',
        //             foreignField: '_id',
        //             as: 'adminInfo'

        //         },
        //     },
        //     { $unwind: '$adminInfo' },

        //     {
        //         $project: {
        //             _id: 1,
        //             'categoryName': "$category.categoryName",
        //             userInfoEmail: "$userInfo.email",
        //             adminInfoEmail: "$adminInfo.email",
        //             //reply: 1  

        //         }
        //     }
        // ])
        // return res.status(200).json({ "success": false, 'result': supportTicketData })
    } catch (err) {
        console.log(err)
    }
}

// const sum = (a, b, cb) => {
//     const result = a + b
//     cb(null, result)

// }
// const add = (err, data) => {
//     console.log(data)
// }
// // sum(10, 10, add)

// // sum(10, 10, (err, data) => {
// //     console.log("data", data)

// // })
